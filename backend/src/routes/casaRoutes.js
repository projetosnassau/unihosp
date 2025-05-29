import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";

import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/casa/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const casa = await prisma.casa.findUnique({
      where: { id: parseInt(id) },
      include: {
        locador: true,
      },
    });

    if (!casa) {
      return res.status(404).json({ error: "Casa não encontrada" });
    }
    res.json(casa);
  } catch (error) {
    console.error("Erro ao buscar casa: ", error);
    res.status(500).json({ error: "Erro ao buscar casa" });
  }
});

router.get("/casa", async (req, res) => {
  try {
    const casas = await prisma.casa.findMany({
      include: {
        locador: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    res.json(casas);
  } catch (error) {
    console.error("Erro ao buscar casas: ", error);
    res.status(500).json({ error: "Erro ao buscar casas" });
  }
});

router.post(
  "/casa",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
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
    } = req.body;

    if (
      !endereco ||
      !numero ||
      !diretrizes ||
      !locadorId ||
      precoPorNoite === undefined
    ) {
      return res.status(400).json({
        error:
          "Campos obrigatórios (endereco, numero, diretrizes, precoPorNoite, locadorId) não fornecidos.",
      });
    }

    try {
      const locadorExistente = await prisma.locador.findUnique({
        where: { id: parseInt(locadorId) },
      });
      if (!locadorExistente)
        return res.status(404).json({ error: "Locador não encontrado." });

      const novaCasa = await prisma.casa.create({
        data: {
          endereco,
          numero: parseInt(numero),
          cep,
          cidade,
          estado,
          diretrizes,
          complemento,
          precoPorNoite: parseFloat(precoPorNoite),
          locadorId: parseInt(locadorId),
        },
        include: { locador: { select: { id: true, name: true, email: true } } },
      });
      res.status(201).json(novaCasa);
    } catch (error) {
      console.error("Erro ao criar casa: ", error);
      if (error.code === "P2003")
        return res.status(400).json({
          error: `Falha na restrição de chave estrangeira: ${error.meta?.field_name}`,
        });
      res
        .status(500)
        .json({ error: "Erro interno ao criar casa", details: error.message });
    }
  }
);

router.put(
  "/casa/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
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
    } = req.body;
    const usuarioLogado = req.usuario;

    try {
      const casaExistente = await prisma.casa.findUnique({
        where: { id: parseInt(id) },
      });
      if (!casaExistente)
        return res.status(404).json({ error: "Casa não encontrada." });

      if (
        usuarioLogado.tipo === "locador" &&
        casaExistente.locadorId !== usuarioLogado.id
      ) {
        return res.status(403).json({
          error: "Acesso negado: Você só pode editar suas próprias casas.",
        });
      }

      const dadosAtualizar = {
        endereco,
        numero: numero ? parseInt(numero) : undefined,
        cep,
        cidade,
        estado,
        diretrizes,
        complemento,
        precoPorNoite:
          precoPorNoite !== undefined ? parseFloat(precoPorNoite) : undefined,
      };
      Object.keys(dadosAtualizar).forEach(
        (key) => dadosAtualizar[key] === undefined && delete dadosAtualizar[key]
      );

      const casaAtualizada = await prisma.casa.update({
        where: { id: parseInt(id) },
        data: dadosAtualizar,
      });
      res.json(casaAtualizada);
    } catch (error) {
      console.error("Erro ao atualizar casa: ", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar casa", details: error.message });
    }
  }
);

router.delete(
  "/casa/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    try {
      await prisma.casa.delete({
        where: { id: parseInt(req.params.id) },
      });
      res.json({ message: "Casa deletada com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar casa: ", error);
      res.status(500).json({ error: "Erro ao deletar casa" });
    }
  }
);

export default router;
