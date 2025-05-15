import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/authMiddleware.js";


const router = express.Router();

const prisma = new PrismaClient();

router.get("/locador", authenticateToken, authorizeRole, async (req, res) => {
  try {
    const locador = await prisma.locador.findMany();
    res.json(locador);
  } catch (error) {
    console.error("Erro ao buscar o Locador: ", error);
    res.status(500).json({ error: "erro ao buscar o locador" });
  }
});

router.post("/locador", async (req, res) => {
  const { name, email, senha, cpf, endereco, cep, cidade, estado } = req.body;
  if (!email) {
    return res.status(400).json({ error: "erro ao encontrar email" });
  }
  try {
    const senhaHash = await bcrypt.hash(senha, 10)

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
export default router;
