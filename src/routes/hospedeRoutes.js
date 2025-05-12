import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/hospede", async (req, res) => {
  try {
    const hospede = await prisma.hospede.findMany();
    res.json(hospede);
  } catch (error) {
    console.error("Erro ao buscar o Hóspede: ", error);
    res.status(500).json({ error: "erro ao buscar o hóspede" });
  }
});

router.post("/hospede", async (req, res) => {
  const {
    name,
    email,
    senha,
    cpf,
    cep,
    cidade,
    estado,
    matricula,
    universidade,
  } = req.body;
  if (!email) {
    return res.status(400).json({ error: "erro ao encontrar email" });
  }
  try {
    const newHospede = await prisma.hospede.create({
      data: {
        name,
        email,
        senha,
        cpf,
        cep,
        cidade,
        estado,
        matricula,
        universidade,
      },
    });
    return res.status(201).json(newHospede);
  } catch (error) {
    console.error("erro ao criar hóspede: ", error);

    if (error.code === "P2002") {
      if (error.meta?.target?.includes("email")) {
        return res.status(409).json({
          error: "este email ja esta em uso",
        });
      }
    }
    return res.status(500).json({
      error: "erro ao criar Hóspede",
    });
  }
});
export default router;
