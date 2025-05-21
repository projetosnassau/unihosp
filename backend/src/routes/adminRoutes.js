import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

dotenv.config();

const router = express.Router();
const prisma = new PrismaClient();

router.get(
  "/admin",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    try {
      const admin = await prisma.admin.findMany();
      res.json(admin);
    } catch (error) {
      console.error("Erro ao buscar o admin", error);
      res.status(500).json({ error: "erro ao buscar o admin" });
    }
  }
);

// Buscar admin por ID
router.get(
  "/admin/:id",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    try {
      const admin = await prisma.admin.findUnique({
        where: { id: parseInt(req.params.id) },
      });
      if (!admin) {
        return res.status(404).json({ error: "Admin não encontrado" });
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar admin" });
    }
  }
);

router.post("/login/admin", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      return res.status(404).json({ error: "Admin não encontrado" });
    }
    const senhaCorreta = await bcrypt.compare(senha, admin.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta" });
    }
    const token = jwt.sign(
      { id: admin.id, tipo: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

router.post(
  "/admin",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    const { name, email, senha } = req.body;
    if (!email) {
      return res.status(400).json({ error: "erro ao encontrar email" });
    }
    try {
      const senhaHash = await bcrypt.hash(senha, 10);

      const newAdmin = await prisma.admin.create({
        data: {
          name,
          email,
          senha: senhaHash,
        },
      });

      return res.status(201).json(newAdmin);
    } catch (error) {
      console.error("erro ao criar o admin: ", error);
      if (error.code === "P2002") {
        if (error.meta?.target?.includes("email")) {
          return res.status(409).json({
            error: "este email ja esta em uso",
          });
        }
      }
      return res.status(500).json({
        error: "erro ao criar Admin",
      });
    }
  }
);

// Atualizar admin
router.put(
  "/admin/:id",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    const { name, email, senha } = req.body;
    try {
      let senhaHash;
      if (senha) {
        senhaHash = await bcrypt.hash(senha, 10);
      }
      const adminAtualizado = await prisma.admin.update({
        where: { id: parseInt(req.params.id) },
        data: {
          name,
          email,
          senha: senhaHash,
        },
      });
      res.json(adminAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar admin: ", error);
      res.status(500).json({ error: "Erro ao atualizar admin" });
    }
  }
);

// Deletar admin
router.delete(
  "/admin/:id",
  autenticarToken,
  autorizarTipos("admin"),
  async (req, res) => {
    try {
      await prisma.admin.delete({
        where: { id: parseInt(req.params.id) },
      });
      res.json({ message: "Admin deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar admin: ", error);
      res.status(500).json({ error: "Erro ao deletar admin" });
    }
  }
);

export default router;
