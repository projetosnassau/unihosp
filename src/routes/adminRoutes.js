import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/admin", async (req, res) => {
  try {
    const admin = await prisma.admin.findMany();
    res.json(admin);
  } catch (error) {
    console.error("Erro ao buscar o admin", error);
    res.status(500).json({ error: "erro ao buscar o admin" });
  }
});

router.post("/admin", async (req, res) => {
  const { name, email, senha } = req.body;
  if (!email) {
    return res.status(400).json({ error: "erro ao encontrar email" });
  }
  try {
    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        senha,
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
});

export default router;
