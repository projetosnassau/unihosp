import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";
dotenv.config();

const router = express.Router();

const prisma = new PrismaClient();

router.get(
  "/locador",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    try {
      const locador = await prisma.locador.findMany();
      res.json(locador);
    } catch (error) {
      console.error("Erro ao buscar o Locador: ", error);
      res.status(500).json({ error: "erro ao buscar o locador" });
    }
  }
);

router.get(
  "/locador/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    try {
      const locador = await prisma.locador.findUnique({
        where: { id: parseInt(req.params.id) },
      });
      if (!locador) {
        return res.status(404).json({ error: "Locador não encontrado" });
      }
      res.json(locador);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar locador" });
    }
  }
);

router.post("/locador/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const locador = await prisma.locador.findUnique({ where: { email } });
    if (!locador) {
      return res.status(404).json({ error: "Locador não encontrado" });
    }
    const senhaCorreta = await bcrypt.compare(senha, locador.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta" });
    }
    const token = jwt.sign(
      {
        id: locador.id,
        tipo: "locador",
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

router.post("/locador", async (req, res) => {
  const { name, email, senha, cpf, endereco, cep, cidade, estado } = req.body;
  if (!email) {
    return res.status(400).json({ error: "erro ao encontrar email" });
  }
  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const newLocador = await prisma.locador.create({
      data: {
        name,
        email,
        senha: senhaHash,
        cpf,
        endereco,
        cep,
        cidade,
        estado,
      },
    });

    return res.status(201).json(newLocador);
  } catch (error) {
    console.error("erro ao criar o locador: ", error);

    if (error.code === "P2002") {
      if (error.meta?.target?.includes("email")) {
        return res.status(409).json({
          error: "este email ja esta em uso",
        });
      }
    }
    return res.status(500).json({
      error: "erro ao criar Locador",
    });
  }
});

router.put(
  "/locador/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    const { id } = req.params;
    const { name, email, senha, cpf, endereco, cep, cidade, estado } = req.body;

    try {
      const locadorExistente = await prisma.locador.findUnique({
        where: { id: parseInt(id) },
      });

      if (!locadorExistente) {
        return res.status(404).json({ error: "Locador não encontrado" });
      }

      let senhaHash;
      if (senha) {
        senhaHash = await bcrypt.hash(senha, 10);
      }

      const locadorAtualizado = await prisma.locador.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
          senha: senhaHash || locadorExistente.senha,
          cpf,
          endereco,
          cep,
          cidade,
          estado,
        },
      });
      return res.status(200).json(locadorAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar locador: ", error);
      return res.status(500).json({ error: "Erro ao atualizar locador" });
    }
  }
);

router.delete(
  "/locador/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  async (req, res) => {
    const { id } = req.params;

    try {
      const locadorExistente = await prisma.locador.findUnique({
        where: { id: parseInt(id) },
      });

      if (!locadorExistente) {
        return res.status(404).json({ error: "Locador não encontrado" });
      }

      await prisma.locador.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json({ message: "Locador excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir locador:", error);
      res.status(500).json({ error: "Erro ao excluir locador" });
    }
  }
);

export default router;
