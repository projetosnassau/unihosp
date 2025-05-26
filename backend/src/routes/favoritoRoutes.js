import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/favoritos",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const { casaId } = req.body;
    const hospedeId = req.usuario.id;

    if (!casaId) {
      return res.status(400).json({ error: "ID da casa é obrigatório." });
    }

    try {
      const casaExistente = await prisma.casa.findUnique({
        where: { id: parseInt(casaId) },
      });
      if (!casaExistente) {
        return res.status(404).json({ error: "Casa não encontrada." });
      }

      const novoFavorito = await prisma.favorito.create({
        data: {
          hospedeId: hospedeId,
          casaId: parseInt(casaId),
        },
        include: {
          casa: {
            select: { id: true, endereco: true, cidade: true },
          },
        },
      });
      res.status(201).json(novoFavorito);
    } catch (error) {
      if (error.code === "P2002") {
        return res
          .status(409)
          .json({ error: "Esta casa já está nos seus favoritos." });
      }
      console.error("Erro ao adicionar favorito:", error);
      res.status(500).json({ error: "Erro interno ao adicionar favorito." });
    }
  }
);

router.get(
  "/hospede/favoritos",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const hospedeId = req.usuario.id;
    try {
      const favoritos = await prisma.favorito.findMany({
        where: { hospedeId: hospedeId },
        include: {
          casa: {
            select: {
              id: true,
              endereco: true,
              numero: true,
              cidade: true,
              estado: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.json(favoritos);
    } catch (error) {
      console.error("Erro ao buscar favoritos do hóspede:", error);
      res.status(500).json({ error: "Erro ao buscar favoritos." });
    }
  }
);

router.delete(
  "/favoritos/:casaId",
  autenticarToken,
  autorizarTipos("hospede"),
  async (req, res) => {
    const { casaId } = req.params;
    const hospedeId = req.usuario.id;

    try {
      const favoritoDeletado = await prisma.favorito.deleteMany({
        where: {
          hospedeId: hospedeId,
          casaId: parseInt(casaId),
        },
      });

      if (favoritoDeletado.count === 0) {
        return res
          .status(404)
          .json({ error: "Favorito não encontrado para este usuário e casa." });
      }
      res
        .status(200)
        .json({ message: "Casa removida dos favoritos com sucesso." });
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
      res.status(500).json({ error: "Erro interno ao remover favorito." });
    }
  }
);

router.get(
  "/admin/favoritos",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    try {
      const todosFavoritos = await prisma.favorito.findMany({
        include: {
          hospede: { select: { id: true, name: true, email: true } },
          casa: { select: { id: true, endereco: true } },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.json(todosFavoritos);
    } catch (error) {
      console.error("Erro ao buscar todos os favoritos (admin):", error);
      res.status(500).json({ error: "Erro ao buscar todos os favoritos." });
    }
  }
);

export default router;
