import express from "express";
import { PrismaClient } from "../../generated/prisma/index.js";

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

router.get("/casas", async (req, res) => {
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

router.post("/casa", async (req, res) => {
  const { endereco, numero, cep, cidade, estado, diretrizes, locadorId } =
    req.body;

  if (!endereco || !numero || !diretrizes || !locadorId) {
    return res.status(400).json({
      error:
        "Campos obrigatórios (endereco, numero, diretrizes, locadorId) não fornecidos.",
    });
  }

  try {
    const locadorExistente = await prisma.locador.findUnique({
      where: { id: parseInt(locadorId) },
    });

    if (!locadorExistente) {
      return res
        .status(404)
        .json({ error: "Locador não encontrado com o ID fornecido." });
    }

    const novaCasa = await prisma.casa.create({
      data: {
        endereco,
        numero,
        cep,
        cidade,
        estado,
        diretrizes,
        locadorId: parseInt(locadorId),
      },
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
    res.status(201).json(novaCasa);
  } catch (error) {
    console.error("Erro ao criar casa: ", error);
    if (error.code === "P2003") {
      return res.status(400).json({
        error: `Falha na restrição de chave estrangeira: ${error.meta?.field_name}`,
      });
    }
    res.status(500).json({ error: "Erro interno ao criar casa" });
  }
});

export default router;
