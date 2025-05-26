import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

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
      if (!casa) {
        return res.status(404).json({ error: "Casa não encontrada." });
      }

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
      res.status(500).json({ error: "Erro interno ao criar reserva." });
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
        where: { hospedeId },
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
      console.error("Erro ao buscar reservas do hóspede:", error);
      res.status(500).json({ error: "Erro ao buscar suas reservas." });
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
        where: { locadorId },
        include: {
          casa: { select: { id: true, endereco: true, cidade: true } },
          hospede: { select: { id: true, name: true, email: true } },
        },
        orderBy: { dataCheckIn: "asc" },
      });
      res.json(reservas);
    } catch (error) {
      console.error("Erro ao buscar reservas do locador:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar reservas para suas casas." });
    }
  }
);

router.put(
  "/reservas/:reservaId/status",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    const { reservaId } = req.params;
    const { status } = req.body;
    const usuarioLogado = req.usuario;

    if (!status) {
      return res.status(400).json({ error: "Novo status é obrigatório." });
    }
    const statusValidos = [
      "PENDENTE",
      "CONFIRMADA",
      "CANCELADA_PELO_LOCADOR",
      "CANCELADA_PELO_HOSPEDE",
      "CONCLUIDA",
      "REJEITADA",
    ];
    if (!statusValidos.includes(status.toUpperCase())) {
      return res.status(400).json({
        error: `Status inválido. Válidos: ${statusValidos.join(", ")}`,
      });
    }

    try {
      const reserva = await prisma.reserva.findUnique({
        where: { id: parseInt(reservaId) },
      });
      if (!reserva) {
        return res.status(404).json({ error: "Reserva não encontrada." });
      }

      if (
        usuarioLogado.tipo === "locador" &&
        reserva.locadorId !== usuarioLogado.id
      ) {
        return res
          .status(403)
          .json({ error: "Acesso negado para atualizar esta reserva." });
      }

      const reservaAtualizada = await prisma.reserva.update({
        where: { id: parseInt(reservaId) },
        data: { status: status.toUpperCase() },
      });
      res.json(reservaAtualizada);
    } catch (error) {
      console.error("Erro ao atualizar status da reserva:", error);
      res.status(500).json({ error: "Erro ao atualizar status da reserva." });
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
      res.status(500).json({ error: "Erro ao buscar todas as reservas." });
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
      res.status(500).json({ error: "Erro ao deletar reserva." });
    }
  }
);

export default router;
