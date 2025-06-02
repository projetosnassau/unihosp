import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const criarAvaliacao = async (req, res) => {
  const { reservaId } = req.params;
  const { nota, comentario } = req.body;
  const hospedeId = req.usuario.id;

  if (!nota || nota < 1 || nota > 5) {
    return res.status(400).json({ error: "Nota da avaliação (1-5) é obrigatória e deve ser válida." });
  }
  if (!reservaId || isNaN(parseInt(reservaId))) {
    return res.status(400).json({ error: "ID da reserva inválido." });
  }

  const idReserva = parseInt(reservaId);

  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id: idReserva },
      include: { casa: true }
    });

    if (!reserva) {
      return res.status(404).json({ error: "Reserva não encontrada." });
    }
    if (reserva.hospedeId !== hospedeId) {
      return res.status(403).json({ error: "Você só pode avaliar suas próprias reservas." });
    }
    if (reserva.status !== "CONCLUIDA") {
      return res.status(400).json({ error: "Só é possível avaliar reservas com status 'CONCLUIDA'." });
    }

    const avaliacaoExistente = await prisma.avaliacao.findUnique({
      where: { reservaId: idReserva },
    });

    if (avaliacaoExistente) {
      return res.status(409).json({ error: "Esta reserva já foi avaliada." });
    }

    const novaAvaliacao = await prisma.avaliacao.create({
      data: {
        nota: parseInt(nota),
        comentario: comentario || null,
        reservaId: idReserva,
        hospedeId: hospedeId,
        casaId: reserva.casaId,
      },
      include: {
        hospede: { select: { name: true, id: true } }
      }
    });

    res.status(201).json(novaAvaliacao);
  } catch (error) {
    console.error("Erro ao criar avaliação:", error);
    if (error.code === 'P2002' && error.meta?.target?.includes('reservaId')) {
        return res.status(409).json({ error: "Avaliação para esta reserva já existe (P2002)." });
    }
    res.status(500).json({ error: "Erro interno ao criar avaliação.", details: error.message });
  }
};

export const listarAvaliacoesDaCasa = async (req, res) => {
  const { casaId } = req.params;

  if (isNaN(parseInt(casaId))) {
      return res.status(400).json({ error: "ID da casa inválido." });
  }

  try {
    const casa = await prisma.casa.findUnique({ where: {id: parseInt(casaId)}});
    if (!casa) {
        return res.status(404).json({ error: "Casa não encontrada." });
    }

    const avaliacoes = await prisma.avaliacao.findMany({
      where: { casaId: parseInt(casaId) },
      include: {
        hospede: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    let mediaNotas = 0;
    if (avaliacoes.length > 0) {
      const somaNotas = avaliacoes.reduce((acc, curr) => acc + curr.nota, 0);
      mediaNotas = parseFloat((somaNotas / avaliacoes.length).toFixed(1));
    }

    res.json({
      avaliacoes,
      total: avaliacoes.length,
      mediaNotas,
    });
  } catch (error) {
    console.error("Erro ao listar avaliações da casa:", error);
    res.status(500).json({ error: "Erro interno ao listar avaliações." });
  }
};

