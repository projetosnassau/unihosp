import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

const STATUS_ATIVOS = ["PENDENTE", "CONFIRMADA"];
const STATUS_HISTORICO = [
  "CANCELADA_PELO_HOSPEDE",
  "CANCELADA_PELO_LOCADOR",
  "REJEITADA",
  "CONCLUIDA",
];



const paraDataUTCString = (dateObj) => {
    const d = new Date(dateObj);
    d.setUTCHours(0, 0, 0, 0);
    return d.toISOString().split('T')[0];
};

export const criarReserva = async (req, res) => {
  console.log('[ReservaController] criarReserva - req.usuario:', JSON.stringify(req.usuario, null, 2));
  console.log('[ReservaController] criarReserva - req.body:', JSON.stringify(req.body, null, 2));

  const { casaId, dataCheckIn, dataCheckOut, numeroHospedes, observacoes } =
    req.body;
  const hospedeId = req.usuario.id;

  if (!casaId || !dataCheckIn || !dataCheckOut) {
    return res.status(400).json({
      error: "ID da casa, data de check-in e check-out são obrigatórios.",
    });
  }

  const checkInSolicitadoOriginal = new Date(dataCheckIn);
  const checkOutSolicitadoOriginal = new Date(dataCheckOut);
  const inicioSolicitadoComparacao = new Date(new Date(dataCheckIn).setUTCHours(0, 0, 0, 0));
  const fimSolicitadoComparacao = new Date(new Date(dataCheckOut).setUTCHours(0, 0, 0, 0));
  const hojeComparacao = new Date(new Date().setUTCHours(0,0,0,0));

  if (isNaN(inicioSolicitadoComparacao.getTime()) || isNaN(fimSolicitadoComparacao.getTime())) {
    return res.status(400).json({ error: "Datas de check-in ou check-out inválidas." });
  }
  if (fimSolicitadoComparacao <= inicioSolicitadoComparacao) {
    return res
      .status(400)
      .json({ error: "A data de check-out deve ser posterior à data de check-in." });
  }
  if (inicioSolicitadoComparacao < hojeComparacao) {
    return res.status(400).json({ error: "A data de check-in não pode ser no passado." });
  }

  try {
    const casa = await prisma.casa.findUnique({
      where: { id: parseInt(casaId) },
    });
    if (!casa) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }
    if (casa.precoPorNoite === null || casa.precoPorNoite === undefined) {
      return res.status(400).json({
        error: "Esta casa não possui um preço por noite definido e não pode ser reservada.",
      });
    }

    const reservasConflitantes = await prisma.reserva.findMany({
      where: {
        casaId: parseInt(casaId),
        status: { in: ["CONFIRMADA", "PENDENTE"] },
        AND: [
          { dataCheckIn: { lt: checkOutSolicitadoOriginal.toISOString() } },
          { dataCheckOut: { gt: checkInSolicitadoOriginal.toISOString() } },
        ],
      },
    });

    if (reservasConflitantes.length > 0) {
      console.warn(`[ReservaController] Conflito de reserva detectado para casa ${casaId} no período ${dataCheckIn} a ${dataCheckOut}`);
      return res.status(409).json({
        error: "A casa já está reservada para o período selecionado ou parte dele.",
      });
    }

    const bloqueiosConflitantes = await prisma.bloqueioDisponibilidade.findMany({
      where: {
        casaId: parseInt(casaId),
        AND: [
          { dataInicio: { lte: checkOutSolicitadoOriginal.toISOString() } },
          { dataFim: { gte: checkInSolicitadoOriginal.toISOString() } },
        ],
      },
    });
    
     const bloqueiosRealmenteConflitantes = bloqueiosConflitantes.filter(b => {
        const bloqueioInicio = new Date(new Date(b.dataInicio).setUTCHours(0,0,0,0));
        const bloqueioFim = new Date(new Date(b.dataFim).setUTCHours(0,0,0,0));
        return inicioSolicitadoComparacao <= bloqueioFim && fimSolicitadoComparacao > bloqueioInicio;
    });

    if (bloqueiosRealmenteConflitantes.length > 0) {
      console.warn(`[ReservaController] Conflito de bloqueio detectado para casa ${casaId} no período ${dataCheckIn} a ${dataCheckOut}`);
      return res.status(409).json({
        error: "A casa está indisponível (bloqueada pelo locador) para o período selecionado ou parte dele.",
      });
    }

    const diffTime = Math.abs(checkOutSolicitadoOriginal - checkInSolicitadoOriginal);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        return res.status(400).json({error: "A duração da reserva deve ser de pelo menos 1 noite."})
    }

    const valorTotalCalculado = diffDays * casa.precoPorNoite;

    const novaReserva = await prisma.reserva.create({
      data: {
        hospedeId,
        casaId: parseInt(casaId),
        locadorId: casa.locadorId,
        dataCheckIn: checkInSolicitadoOriginal.toISOString(),
        dataCheckOut: checkOutSolicitadoOriginal.toISOString(),
        numeroHospedes: numeroHospedes ? parseInt(numeroHospedes) : 1,
        observacoes: observacoes || null,
        status: "PENDENTE",
        valorTotalCalculado: valorTotalCalculado,
        statusPagamento: "PENDENTE_PAGAMENTO",
      },
      include: {
        casa: { select: { endereco: true, cidade: true, precoPorNoite: true, numero: true } },
        hospede: { select: { name: true, email: true } },
      },
    });
    console.log(`[ReservaController] Reserva ${novaReserva.id} criada com sucesso para casa ${casaId}`);
    res.status(201).json(novaReserva);
  } catch (error) {
    console.error("[ReservaController] Erro ao criar reserva:", error);
    res.status(500).json({
      error: "Erro interno ao criar reserva.",
      details: error.message,
    });
  }
};

export const listarReservasAtivasHospede = async (req, res) => {
  console.log('[ReservaController] listarReservasAtivasHospede - req.usuario:', JSON.stringify(req.usuario, null, 2));
  if (!req.usuario || req.usuario.tipo !== 'hospede' || !req.usuario.id) {
    console.error('[ReservaController] listarReservasAtivasHospede - ID do usuário não encontrado ou tipo incorreto em req.usuario.');
    return res.status(401).json({ error: "Não autorizado ou ID do hóspede não encontrado." });
  }
  const hospedeId = req.usuario.id;
  try {
    const reservas = await prisma.reserva.findMany({
      where: { hospedeId, status: { in: STATUS_ATIVOS } },
      include: {
        casa: {
          select: {
            id: true, endereco: true, cidade: true, numero: true,
            locador: { select: { name: true, email: true } },
            imagens: { take: 1, select: { url: true }, orderBy: {createdAt: 'asc'}}
          },
        },
      },
      orderBy: { dataCheckIn: "asc" },
    });
    console.log(`[ReservaController] Reservas ativas encontradas para hospedeId ${hospedeId}: ${reservas.length}`);
    res.json(reservas);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar reservas ativas do hóspede:", error);
    res.status(500).json({ error: "Erro ao buscar suas reservas ativas." });
  }
};

export const buscarReservaPorId = async (req, res) => {
  const { reservaId } = req.params;
  const usuarioLogado = req.usuario;
  console.log(`[ReservaController] buscarReservaPorId - ID: ${reservaId}, Usuário Logado:`, JSON.stringify(usuarioLogado, null, 2));

  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id: parseInt(reservaId) },
      include: {
        casa: { select: { id: true, endereco: true, numero: true, cidade: true } },
        hospede: { select: { id: true, name: true, email: true } },
        locador: { select: { id: true, name: true } }
      },
    });

    if (!reserva) {
      return res.status(404).json({ error: "Reserva não encontrada." });
    }

    const ehHospedeDaReserva = reserva.hospedeId === usuarioLogado.id;
    const ehLocadorDaReserva = reserva.locadorId === usuarioLogado.id;
    const ehAdmin = usuarioLogado.tipo === "admin";

    if (!ehHospedeDaReserva && !ehLocadorDaReserva && !ehAdmin) {
      return res.status(403).json({ error: "Acesso negado a esta reserva." });
    }
    res.json(reserva);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar reserva por ID:", error);
    res.status(500).json({ error: "Erro interno ao buscar detalhes da reserva."});
  }
};

export const listarHistoricoReservasHospede = async (req, res) => {
  console.log('[ReservaController] listarHistoricoReservasHospede - req.usuario:', JSON.stringify(req.usuario, null, 2));
  if (!req.usuario || req.usuario.tipo !== 'hospede' || !req.usuario.id) {
    return res.status(401).json({ error: "Não autorizado ou ID do hóspede não encontrado." });
  }
  const hospedeId = req.usuario.id;
  try {
    const reservas = await prisma.reserva.findMany({
      where: { hospedeId, status: { in: STATUS_HISTORICO } },
      include: {
        casa: {
          select: {
            id: true, endereco: true, cidade: true, numero: true,
            locador: { select: { name: true, email: true } },
            imagens: { take: 1, select: { url: true }, orderBy: {createdAt: 'asc'}}
          },
        },
      },
      orderBy: { dataCheckOut: "desc" },
    });
    res.json(reservas);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar histórico de reservas do hóspede:", error);
    res.status(500).json({ error: "Erro ao buscar seu histórico de reservas." });
  }
};

export const listarReservasAtivasLocador = async (req, res) => {
  console.log('[ReservaController] listarReservasAtivasLocador - req.usuario:', JSON.stringify(req.usuario, null, 2));
  if (!req.usuario || req.usuario.tipo !== 'locador' || !req.usuario.id) {
    return res.status(401).json({ error: "Não autorizado ou ID do locador não encontrado." });
  }
  const locadorId = req.usuario.id;
  try {
    const reservas = await prisma.reserva.findMany({
      where: { locadorId, status: { in: STATUS_ATIVOS } },
      include: {
        casa: { select: { id: true, endereco: true, cidade: true, numero: true } },
        hospede: { select: { id: true, name: true, email: true } },
      },
      orderBy: { dataCheckIn: "asc" },
    });
    res.json(reservas);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar reservas ativas do locador:", error);
    res.status(500).json({ error: "Erro ao buscar reservas ativas para suas casas." });
  }
};

export const listarHistoricoReservasLocador = async (req, res) => {
  console.log('[ReservaController] listarHistoricoReservasLocador - req.usuario:', JSON.stringify(req.usuario, null, 2));
  if (!req.usuario || req.usuario.tipo !== 'locador' || !req.usuario.id) {
    return res.status(401).json({ error: "Não autorizado ou ID do locador não encontrado." });
  }
  const locadorId = req.usuario.id;
  try {
    const reservas = await prisma.reserva.findMany({
      where: { locadorId, status: { in: STATUS_HISTORICO } },
      include: {
        casa: { select: { id: true, endereco: true, cidade: true, numero: true } },
        hospede: { select: { id: true, name: true, email: true } },
      },
      orderBy: { dataCheckOut: "desc" },
    });
    res.json(reservas);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar histórico de reservas do locador:", error);
    res.status(500).json({ error: "Erro ao buscar histórico de reservas para suas casas." });
  }
};

export const atualizarStatusReserva = async (req, res) => {
  const { reservaId } = req.params;
  const { status, statusPagamento: statusPagamentoBody } = req.body;
  const usuarioLogado = req.usuario;
  console.log(`[ReservaController] atualizarStatusReserva - ID: ${reservaId}, Novo Status: ${status}, Usuário:`, JSON.stringify(usuarioLogado, null, 2));


  if (!status) {
    return res.status(400).json({ error: "Novo status é obrigatório." });
  }

  const statusValidosOperacionais = [
    "PENDENTE", "CONFIRMADA", "REJEITADA",
    "CANCELADA_PELO_LOCADOR", "CANCELADA_PELO_HOSPEDE", "CONCLUIDA",
  ];
  const statusUpperCase = status.toUpperCase();

  if (!statusValidosOperacionais.includes(statusUpperCase)) {
    return res.status(400).json({
      error: `Status inválido. Válidos: ${statusValidosOperacionais.join(", ")}`,
    });
  }

  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id: parseInt(reservaId) },
    });
    if (!reserva) {
      return res.status(404).json({ error: "Reserva não encontrada." });
    }

    let podeAlterar = false;
    const dataToUpdate = { status: statusUpperCase };

    if (usuarioLogado.tipo === "hospede") {
      if (reserva.hospedeId !== usuarioLogado.id) {
        return res.status(403).json({ error: "Acesso negado: Reserva não pertence a este hóspede." });
      }
      if (statusUpperCase === "CANCELADA_PELO_HOSPEDE" && (reserva.status === "PENDENTE" || reserva.status === "CONFIRMADA")) {
        podeAlterar = true;
      } else if (statusUpperCase === "CONFIRMADA" && reserva.status === "PENDENTE" && reserva.statusPagamento === "PENDENTE_PAGAMENTO") {
        podeAlterar = true;
        dataToUpdate.statusPagamento = statusPagamentoBody || "PAGO_SIMULADO";
      } else {
        return res.status(403).json({ error: `Hóspede não pode alterar o status para '${statusUpperCase}' nestas condições.` });
      }
    } else if (usuarioLogado.tipo === "locador") {
      if (reserva.locadorId !== usuarioLogado.id) {
        return res.status(403).json({ error: "Acesso negado: Reserva não pertence a uma de suas casas." });
      }
      const statusPermitidosLocador = ["CONFIRMADA", "REJEITADA", "CANCELADA_PELO_LOCADOR", "CONCLUIDA"];
      if (statusPermitidosLocador.includes(statusUpperCase)) {
        if (statusUpperCase === "CONFIRMADA" && reserva.status !== "PENDENTE") {
            return res.status(400).json({ error: "Locador só pode confirmar reservas pendentes." });
        }
        podeAlterar = true;
        if (statusUpperCase === "CONFIRMADA") {
            if (reserva.statusPagamento === "PENDENTE_PAGAMENTO") {
                 dataToUpdate.statusPagamento = statusPagamentoBody || "PAGO";
            } else if (statusPagamentoBody) {
                 dataToUpdate.statusPagamento = statusPagamentoBody;
            }
        }
      } else {
        return res.status(403).json({ error: `Locador não pode definir o status para '${statusUpperCase}'.` });
      }
    } else if (usuarioLogado.tipo === "admin") {
      podeAlterar = true;
      if (statusPagamentoBody) {
        dataToUpdate.statusPagamento = statusPagamentoBody;
      } else if (statusUpperCase === "CONFIRMADA" && reserva.statusPagamento !== "PAGO" && reserva.statusPagamento !== "PAGO_SIMULADO") {
        dataToUpdate.statusPagamento = "PAGO";
      }
    }

    if (!podeAlterar) {
      return res.status(403).json({ error: `Mudança de status de '${reserva.status}' para '${statusUpperCase}' não permitida por este usuário.` });
    }

    if (statusUpperCase === "CONFIRMADA" && !dataToUpdate.statusPagamento && usuarioLogado.tipo !== 'hospede') {
        dataToUpdate.statusPagamento = "PAGO";
    }

    const reservaAtualizada = await prisma.reserva.update({
      where: { id: parseInt(reservaId) },
      data: dataToUpdate,
      include: {
        casa: { select: { id: true, endereco: true, numero: true, cidade: true } },
        hospede: { select: { id: true, name: true, email: true } }
      }
    });
    res.json(reservaAtualizada);
  } catch (error) {
    console.error("BACKEND LOG: Erro ao atualizar status da reserva:", error);
    if (error.code === "P2025") {
        return res.status(404).json({ error: "Reserva não encontrada para atualização." });
    }
    res.status(500).json({ error: "Erro ao atualizar status da reserva.", details: error.message });
  }
};

export const listarTodasReservasAdmin = async (req, res) => {
  console.log('[ReservaController] listarTodasReservasAdmin - req.usuario:', JSON.stringify(req.usuario, null, 2));
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        hospede: { select: { name: true, email: true } },
        casa: { select: { id: true, endereco: true, numero: true } },
        locador: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(reservas);
  } catch (error) {
    console.error("[ReservaController] Erro ao buscar todas as reservas (admin):", error);
    res.status(500).json({ error: "Erro ao buscar todas as reservas." });
  }
};

export const deletarReservaAdmin = async (req, res) => {
  const { reservaId } = req.params;
  console.log(`[ReservaController] deletarReservaAdmin - ID: ${reservaId}, Usuário:`, JSON.stringify(req.usuario, null, 2));
  try {
    const reservaExistente = await prisma.reserva.findUnique({ where: { id: parseInt(reservaId) } });
    if (!reservaExistente) {
        return res.status(404).json({ error: "Reserva não encontrada para deleção." });
    }
    await prisma.reserva.delete({ where: { id: parseInt(reservaId) } });
    res.status(200).json({ message: "Reserva deletada com sucesso pelo admin." });
  } catch (error) {
    console.error("[ReservaController] Erro ao deletar reserva (admin):", error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Reserva não encontrada para deleção." });
    }
    res.status(500).json({ error: "Erro ao deletar reserva.", details: error.message });
  }
};