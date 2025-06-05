import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const listarCasas = async (req, res) => {
  try {
    const casas = await prisma.casa.findMany({
      include: {
        locador: {
          select: { id: true, name: true, email: true },
        },
        imagens: {
          select: { id: true, url: true },
          take: 1,
          orderBy: { createdAt: 'asc' }
        },
      },
    });
    res.json(casas);
  } catch (error) {
    console.error("Erro ao buscar casas: ", error);
    res.status(500).json({ error: "Erro ao buscar casas" });
  }
};

export const buscarCasaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const casa = await prisma.casa.findUnique({
      where: { id: parseInt(id) },
      include: {
        locador: true,
        imagens: {
          select: { id: true, url: true },
          orderBy: { createdAt: 'asc' }
        },
        bloqueiosDisponibilidade: {
          orderBy: { dataInicio: 'asc' }
        },
        reservas: {
          where: { status: { in: ["PENDENTE", "CONFIRMADA"] } },
          select: { dataCheckIn: true, dataCheckOut: true, status: true }
        }
      },
    });

    if (!casa) {
      return res.status(404).json({ error: "Casa não encontrada" });
    }
    res.json(casa);
  } catch (error) {
    console.error("Erro ao buscar casa por ID: ", error);
    res.status(500).json({ error: "Erro ao buscar casa" });
  }
};

export const criarCasa = async (req, res) => {
  const {
    endereco,
    numero,
    cep,
    cidade,
    estado,
    diretrizes,
    complemento,
    precoPorNoite,
    locadorId,
    imagensUrls,
  } = req.body;

  const idLocadorPayload = parseInt(locadorId);
  if (req.usuario.tipo === "locador" && req.usuario.id !== idLocadorPayload) {
    return res.status(403).json({ error: "Locador só pode criar casas para si mesmo." });
  }


  if (
    !endereco ||
    !numero || 
    !diretrizes ||
    !locadorId ||
    precoPorNoite === undefined || precoPorNoite === null || isNaN(parseFloat(precoPorNoite))
  ) {
    return res.status(400).json({
      error:
        "Campos obrigatórios (endereco, numero, diretrizes, precoPorNoite, locadorId) não fornecidos ou inválidos.",
    });
  }

  try {
    const locadorExistente = await prisma.locador.findUnique({
      where: { id: idLocadorPayload },
    });
    if (!locadorExistente) {
      return res.status(404).json({ error: "Locador especificado não encontrado." });
    }

    const novaCasaData = {
      endereco,
      numero: parseInt(numero),
      cep: cep || null,
      cidade: cidade || null,
      estado: estado || null,
      diretrizes,
      complemento: complemento || null,
      precoPorNoite: parseFloat(precoPorNoite),
      locadorId: idLocadorPayload,
    };

    if (Array.isArray(imagensUrls) && imagensUrls.length > 0) {
      novaCasaData.imagens = {
        create: imagensUrls.map(url => ({ url: String(url).trim() })).filter(img => img.url !== "" && (img.url.startsWith('http://') || img.url.startsWith('https://'))),
      };
    }

    const novaCasa = await prisma.casa.create({
      data: novaCasaData,
      include: {
        locador: { select: { id: true, name: true, email: true } },
        imagens: { select: { id: true, url: true } },
      },
    });
    res.status(201).json(novaCasa);
  } catch (error) {
    console.error("Erro ao criar casa: ", error);
    if (error.code === "P2003") {
      return res.status(400).json({
        error: `Falha na restrição de chave estrangeira: Verifique se o locadorId é válido. Detalhe: ${error.meta?.field_name}`,
      });
    }
    res
      .status(500)
      .json({ error: "Erro interno ao criar casa", details: error.message });
  }
};

export const atualizarCasa = async (req, res) => {
  const { id } = req.params;
  const {
    endereco,
    numero,
    cep,
    cidade,
    estado,
    diretrizes,
    complemento,
    precoPorNoite,
    imagensUrls,
  } = req.body;
  const usuarioLogado = req.usuario;

  try {
    const casaExistente = await prisma.casa.findUnique({
      where: { id: parseInt(id) },
    });

    if (!casaExistente) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }

    if (
      usuarioLogado.tipo === "locador" &&
      casaExistente.locadorId !== usuarioLogado.id
    ) {
      return res.status(403).json({
        error: "Acesso negado: Você só pode editar suas próprias casas.",
      });
    }

    const dadosAtualizar = {};
    if (endereco !== undefined) dadosAtualizar.endereco = endereco;
    if (numero !== undefined) dadosAtualizar.numero = parseInt(numero);
    if (cep !== undefined) dadosAtualizar.cep = cep || null;
    if (cidade !== undefined) dadosAtualizar.cidade = cidade || null;
    if (estado !== undefined) dadosAtualizar.estado = estado || null;
    if (diretrizes !== undefined) dadosAtualizar.diretrizes = diretrizes;
    if (complemento !== undefined) dadosAtualizar.complemento = complemento || null;
    if (precoPorNoite !== undefined) dadosAtualizar.precoPorNoite = parseFloat(precoPorNoite);


    if (Array.isArray(imagensUrls)) {
      await prisma.imagemCasa.deleteMany({
        where: { casaId: parseInt(id) },
      });
      if (imagensUrls.length > 0) {
        dadosAtualizar.imagens = {
          create: imagensUrls.map(url => ({ url: String(url).trim() })).filter(img => img.url !== "" && (img.url.startsWith('http://') || img.url.startsWith('https://'))),
        };
      } else {
      }
    }

    if (Object.keys(dadosAtualizar).length === 0) {
        return res.status(400).json({ error: "Nenhum dado fornecido para atualização." });
    }

    const casaAtualizada = await prisma.casa.update({
      where: { id: parseInt(id) },
      data: dadosAtualizar,
      include: {
        imagens: { select: { id: true, url: true }, orderBy: { createdAt: 'asc'}},
        locador: { select: { id: true, name: true } }
      }
    });
    res.json(casaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar casa: ", error);
    res
      .status(500)
      .json({ error: "Erro ao atualizar casa", details: error.message });
  }
};

export const deletarCasa = async (req, res) => {
  const { id } = req.params;
  const usuarioLogado = req.usuario;

  try {
    const casaExistente = await prisma.casa.findUnique({
      where: { id: parseInt(id) },
    });

    if (!casaExistente) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }

    if (
      usuarioLogado.tipo === "locador" &&
      casaExistente.locadorId !== usuarioLogado.id
    ) {
      return res.status(403).json({
        error: "Acesso negado: Você só pode deletar suas próprias casas.",
      });
    }
    await prisma.casa.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Casa deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar casa: ", error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Casa não encontrada para deleção." });
    }
    res.status(500).json({ error: "Erro ao deletar casa", details: error.message });
  }
};



export const listarBloqueiosCasa = async (req, res) => {
  const { casaId } = req.params;
  const usuarioLogado = req.usuario;

  try {
    const casa = await prisma.casa.findUnique({
      where: { id: parseInt(casaId) }
    });
    if (!casa) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }
    if (usuarioLogado.tipo === "locador" && casa.locadorId !== usuarioLogado.id) {
      return res.status(403).json({ error: "Acesso negado aos bloqueios desta casa." });
    }

    const bloqueios = await prisma.bloqueioDisponibilidade.findMany({
      where: { casaId: parseInt(casaId) },
      orderBy: { dataInicio: 'asc' },
    });
    res.json(bloqueios);
  } catch (error) {
    console.error("Erro ao listar bloqueios da casa:", error);
    res.status(500).json({ error: "Erro interno ao listar bloqueios." });
  }
};

export const adicionarBloqueioCasa = async (req, res) => {
  const { casaId } = req.params;
  const { dataInicio, dataFim, motivo } = req.body;
  const usuarioLogado = req.usuario;

  if (!dataInicio || !dataFim) {
    return res.status(400).json({ error: "Data de início e data de fim são obrigatórias." });
  }

  const dtInicio = new Date(dataInicio + 'T00:00:00Z');
  const dtFim = new Date(dataFim + 'T23:59:59Z');

  if (isNaN(dtInicio.getTime()) || isNaN(dtFim.getTime())) {
    return res.status(400).json({ error: "Datas inválidas." });
  }
  if (dtFim < dtInicio) {
    return res.status(400).json({ error: "A data de fim não pode ser anterior à data de início." });
  }


  try {
    const casa = await prisma.casa.findUnique({
      where: { id: parseInt(casaId) }
    });
    if (!casa) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }
    if (usuarioLogado.tipo === "locador" && casa.locadorId !== usuarioLogado.id) {
      return res.status(403).json({ error: "Você só pode adicionar bloqueios para suas próprias casas." });
    }

    const reservasConflitantes = await prisma.reserva.findMany({
        where: {
            casaId: parseInt(casaId),
            status: { in: ["CONFIRMADA", "PENDENTE"] },
            AND: [
                { dataCheckIn: { lt: dtFim.toISOString() } },
                { dataCheckOut: { gt: dtInicio.toISOString() } },
            ],
        },
    });

    if (reservasConflitantes.length > 0) {
        return res.status(409).json({
            error: "Este período conflita com reservas existentes.",
            reservasConflitantes: reservasConflitantes.map(r => ({inicio: r.dataCheckIn, fim: r.dataCheckOut}))
        });
    }


    const novoBloqueio = await prisma.bloqueioDisponibilidade.create({
      data: {
        casaId: parseInt(casaId),
        dataInicio: dtInicio,
        dataFim: dtFim,
        motivo: motivo || null,
      },
    });
    res.status(201).json(novoBloqueio);
  } catch (error) {
    console.error("Erro ao criar bloqueio de disponibilidade:", error);
    res.status(500).json({ error: "Erro interno ao criar bloqueio.", details: error.message });
  }
};

export const removerBloqueioCasa = async (req, res) => {
  const { bloqueioId } = req.params;
  const usuarioLogado = req.usuario;

  try {
    const bloqueio = await prisma.bloqueioDisponibilidade.findUnique({
      where: { id: parseInt(bloqueioId) },
      include: { casa: true } 
    });

    if (!bloqueio) {
      return res.status(404).json({ error: "Bloqueio não encontrado." });
    }

    if (usuarioLogado.tipo === "locador" && bloqueio.casa.locadorId !== usuarioLogado.id) {
      return res.status(403).json({ error: "Você só pode remover bloqueios de suas próprias casas." });
    }

    await prisma.bloqueioDisponibilidade.delete({
      where: { id: parseInt(bloqueioId) },
    });

    res.status(200).json({ message: "Bloqueio de disponibilidade removido com sucesso." });
  } catch (error) {
    console.error("Erro ao remover bloqueio:", error);
     if (error.code === 'P2025') {
        return res.status(404).json({ error: "Bloqueio não encontrado para remoção." });
      }
    res.status(500).json({ error: "Erro interno ao remover bloqueio.", details: error.message });
  }
};