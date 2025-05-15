import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../../generated/prisma/index.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/login/admin", async (req, res) => {
  const { email, senha } = req.body;
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return res.status(401).json({ error: "Credenciais inválidas" });

  const senhaValida = await bcrypt.compare(senha, admin.senha);
  if (!senhaValida)
    return res.status(401).json({ error: "Credenciais inválidas" });

  const token = jwt.sign(
    { id: admin.id, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
});

export default router;
