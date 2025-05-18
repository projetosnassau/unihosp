import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/authMiddleware.js";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/hospede", authenticateToken, authorizeRole, async (req, res) => {
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
    const senhaHash = await bcrypt.hash(senha, 10);
    const newHospede = await prisma.hospede.create({
      data: {
        name,
        email,
        senha: senhaHash,
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

router.put("/hospede/:id", async (req, res) => {
  const { id } = req.params;
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

  try {
    const hospedeExistente = await prisma.hospede.findUnique({
      where: { id: parseInt(id) },
    });

    if (!hospedeExistente) {
      return res.status(404).json({ error: "Hóspede não encontrado" });
    }

    let senhaHash;
    if (senha) {
      senhaHash = await bcrypt.hash(senha, 10);
    }

    const hospedeAtualizado = await prisma.hospede.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        senha: senhaHash || hospedeExistente.senha,
        cpf,
        cep,
        cidade,
        estado,
        matricula,
        universidade,
      },
    });

    return res.status(200).json(hospedeAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar hóspede: ", error);
    return res.status(500).json({ error: "Erro ao atualizar hóspede" });
  }
});

router.delete("/hospede/:id", async (req, res) => {
  const { id } = req.params;

  try{
    const hospedeExistente = await prisma.hospede.findUnique({
      where: {id: parseInt(id) },
    });
    
    if(!hospedeExistente){
    return res.status(404).json({error: "Hóspede não encontrado" });
  }

  await prisma.hospede.delete({
    where: {id: parseInt(id) },
  });

  res.status(200).json({ message: "Hóspede excluído com sucesso"});
} catch (error){
  console.error("Erro ao excluir hóspede:", error);
  res.status(500).json({ error: "Erro ao excluir hóspede" });
}
});


export default router;
