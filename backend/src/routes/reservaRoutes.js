import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

const STATUS_ATIVOS = ["PENDENTE", "CONFIRMADA"];
const STATUS_HISTORICO = [
  "CANCELADA_PELO_HOSPEDE",
  "CANCELADA_PELO_LOCADOR",
  "REJEITADA",
  "CONCLUIDA",
];

router.post(
  "/reservas",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const { casaId, dataCheckIn, dataCheckOut, numeroHospedes, observacoes } =
      req.body;
    const hospedeId = req.usuario.id;

    if (!casaId || !dataCheckIn || !dataCheckOut) {
      return res.status(400).json({
        error: "ID da casa, data de check-in e check-out são obrigatórios.",
      });
    }
    const checkInDate = new Date(dataCheckIn);
    const checkOutDate = new Date(dataCheckOut);
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return res
        .status(400)
        .json({ error: "Datas de check-in ou check-out inválidas." });
    }
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({
        error: "Data de check-out deve ser posterior à data de check-in.",
      });
    }
    if (checkInDate < new Date().setHours(0, 0, 0, 0)) {
      return res
        .status(400)
        .json({ error: "Data de check-in não pode ser no passado." });
    }
    try {
      const casa = await prisma.casa.findUnique({
        where: { id: parseInt(casaId) },
      });
      if (!casa) return res.status(404).json({ error: "Casa não encontrada." });

      const novaReserva = await prisma.reserva.create({
        data: {
          hospedeId,
          casaId: parseInt(casaId),
          locadorId: casa.locadorId,
          dataCheckIn: checkInDate.toISOString(),
          dataCheckOut: checkOutDate.toISOString(),
          numeroHospedes: numeroHospedes ? parseInt(numeroHospedes) : null,
          observacoes,
          status: "PENDENTE",
        },
        include: {
          casa: { select: { endereco: true, cidade: true } },
          hospede: { select: { name: true, email: true } },
        },
      });
      res.status(201).json(novaReserva);
    } catch (error) {
      console.error("Erro ao criar reserva:", error);
      res.status(500).json({
        error: "Erro interno ao criar reserva.",
        details: error.message,
      });
    }
  }
);

router.get(
  "/hospede/reservas",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const hospedeId = req.usuario.id;
    try {
      const reservas = await prisma.reserva.findMany({
        where: { hospedeId, status: { in: STATUS_ATIVOS } },
        include: {
          casa: {
            select: {
              id: true,
              endereco: true,
              cidade: true,
              locador: { select: { name: true, email: true } },
            },
          },
        },
        orderBy: { dataCheckIn: "asc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar reservas ativas do hóspede:", error);
      res.status(500).json({
        error: "Erro ao buscar suas reservas ativas.",
        details: error.message,
      });
    }
  }
);

router.get(
  "/hospede/reservas/historico",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const hospedeId = req.usuario.id;
    try {
      const reservas = await prisma.reserva.findMany({
        where: { hospedeId, status: { in: STATUS_HISTORICO } },
        include: {
          casa: {
            select: {
              id: true,
              endereco: true,
              cidade: true,
              locador: { select: { name: true, email: true } },
            },
          },
        },
        orderBy: { dataCheckOut: "desc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar histórico de reservas do hóspede:", error);
      res.status(500).json({
        error: "Erro ao buscar seu histórico de reservas.",
        details: error.message,
      });
    }
  }
);

router.get(
  "/locador/reservas",
  autenticarToken,
  autorizarTipos("locador"),
  async (req, res) => {
    const locadorId = req.usuario.id;
    try {
      const reservas = await prisma.reserva.findMany({
        where: { locadorId, status: { in: STATUS_ATIVOS } },
        include: {
          casa: { select: { id: true, endereco: true, cidade: true } },
          hospede: { select: { id: true, name: true, email: true } },
        },
        orderBy: { dataCheckIn: "asc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar reservas ativas do locador:", error);
      res.status(500).json({
        error: "Erro ao buscar reservas ativas para suas casas.",
        details: error.message,
      });
    }
  }
);

router.get(
  "/locador/reservas/historico",
  autenticarToken,
  autorizarTipos("locador"),
  async (req, res) => {
    const locadorId = req.usuario.id;
    try {
      const reservas = await prisma.reserva.findMany({
        where: { locadorId, status: { in: STATUS_HISTORICO } },
        include: {
          casa: { select: { id: true, endereco: true, cidade: true } },
          hospede: { select: { id: true, name: true, email: true } },
        },
        orderBy: { dataCheckOut: "desc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar histórico de reservas do locador:", error);
      res.status(500).json({
        error: "Erro ao buscar histórico de reservas para suas casas.",
        details: error.message,
      });
    }
  }
);

router.put(
  "/reservas/:reservaId/status",
  autenticarToken,
  autorizarTipos("hospede", "locador", "admin"),
  async (req, res) => {
    const { reservaId } = req.params;
    const { status } = req.body;
    const usuarioLogado = req.usuario;

    if (!status)
      return res.status(400).json({ error: "Novo status é obrigatório." });

    const statusValidosOperacionais = [
      "PENDENTE",
      "CONFIRMADA",
      "REJEITADA",
      "CANCELADA_PELO_LOCADOR",
      "CANCELADA_PELO_HOSPEDE",
      "CONCLUIDA",
    ];
    const statusUpperCase = status.toUpperCase();

    if (!statusValidosOperacionais.includes(statusUpperCase)) {
      return res.status(400).json({
        error: `Status inválido. Válidos para operação: ${statusValidosOperacionais.join(
          ", "
        )}`,
      });
    }

    try {
      const reserva = await prisma.reserva.findUnique({
        where: { id: parseInt(reservaId) },
      });
      if (!reserva)
        return res.status(404).json({ error: "Reserva não encontrada." });

      let podeAlterar = false;
      if (usuarioLogado.tipo === "hospede") {
        if (reserva.hospedeId !== usuarioLogado.id)
          return res.status(403).json({
            error: "Acesso negado: Reserva não pertence a este hóspede.",
          });
        if (
          statusUpperCase === "CANCELADA_PELO_HOSPEDE" &&
          (reserva.status === "PENDENTE" || reserva.status === "CONFIRMADA")
        ) {
          podeAlterar = true;
        } else {
          return res.status(403).json({
            error:
              "Hóspedes só podem cancelar suas próprias reservas (pendentes ou confirmadas).",
          });
        }
      } else if (usuarioLogado.tipo === "locador") {
        if (reserva.locadorId !== usuarioLogado.id)
          return res.status(403).json({
            error: "Acesso negado: Reserva não pertence a uma de suas casas.",
          });
        const statusPermitidosLocador = [
          "CONFIRMADA",
          "REJEITADA",
          "CANCELADA_PELO_LOCADOR",
          "CONCLUIDA",
        ];
        if (statusPermitidosLocador.includes(statusUpperCase)) {
          if (statusUpperCase === "CONFIRMADA" && reserva.status !== "PENDENTE")
            return res
              .status(400)
              .json({ error: "Só é possível confirmar reservas pendentes." });
          if (statusUpperCase === "REJEITADA" && reserva.status !== "PENDENTE")
            return res
              .status(400)
              .json({ error: "Só é possível rejeitar reservas pendentes." });
          if (
            statusUpperCase === "CANCELADA_PELO_LOCADOR" &&
            !["PENDENTE", "CONFIRMADA"].includes(reserva.status)
          )
            return res.status(400).json({
              error:
                "Só é possível cancelar reservas pendentes ou confirmadas.",
            });
          if (
            statusUpperCase === "CONCLUIDA" &&
            reserva.status !== "CONFIRMADA"
          )
            return res.status(400).json({
              error:
                "Só é possível marcar como concluída uma reserva confirmada e após a data de checkout.",
            });
          podeAlterar = true;
        } else {
          return res.status(403).json({
            error: `Locador não pode definir o status para '${statusUpperCase}'.`,
          });
        }
      } else if (usuarioLogado.tipo === "admin") {
        podeAlterar = true;
      }

      if (!podeAlterar)
        return res.status(403).json({
          error: `Mudança de status de '${reserva.status}' para '${statusUpperCase}' não permitida.`,
        });

      const reservaAtualizada = await prisma.reserva.update({
        where: { id: parseInt(reservaId) },
        data: { status: statusUpperCase },
      });
      res.json(reservaAtualizada);
    } catch (error) {
      console.error("BACKEND LOG: Erro ao atualizar status da reserva:", error);
      res.status(500).json({
        error: "Erro ao atualizar status da reserva.",
        details: error.message,
      });
    }
  }
);

router.get(
  "/admin/reservas",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    try {
      const reservas = await prisma.reserva.findMany({
        include: {
          hospede: { select: { name: true, email: true } },
          casa: { select: { endereco: true } },
          locador: { select: { name: true } },
        },
        orderBy: { createdAt: "desc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar todas as reservas (admin):", error);
      res.status(500).json({
        error: "Erro ao buscar todas as reservas.",
        details: error.message,
      });
    }
  }
);

router.delete(
  "/admin/reservas/:reservaId",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    const { reservaId } = req.params;
    try {
      await prisma.reserva.delete({ where: { id: parseInt(reservaId) } });
      res
        .status(200)
        .json({ message: "Reserva deletada com sucesso pelo admin." });
    } catch (error) {
      if (error.code === "P2025") {
        return res
          .status(404)
          .json({ error: "Reserva não encontrada para deleção." });
      }
      console.error("Erro ao deletar reserva (admin):", error);
      res
        .status(500)
        .json({ error: "Erro ao deletar reserva.", details: error.message });
    }
  }
);

export default router;
