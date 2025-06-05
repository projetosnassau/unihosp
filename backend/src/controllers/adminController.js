import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const listarAdmins = async (req, res) => { 
  try {
    const admins = await prisma.admin.findMany({
      select: { id: true, name: true, email: true },
    });
    res.json(admins);
  } catch (error) {
    console.error("Erro ao buscar admins:", error);
    res.status(500).json({ error: "Erro ao buscar admins" });
  }
};

export const buscarAdminPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(id) },
      select: { id: true, name: true, email: true },
    });

    if (!admin) {
      return res.status(404).json({ error: "Admin não encontrado" });
    }

    res.json(admin);
  } catch (error) {
    console.error(`Erro ao buscar admin ID ${id}:`, error);
    res.status(500).json({ error: "Erro ao buscar admin" });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return res
        .status(404)
        .json({ error: "Admin não encontrado com este email." });
    }

    const senhaCorreta = await bcrypt.compare(senha, admin.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    const token = jwt.sign(
      { id: admin.id, tipo: "admin", name: admin.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        tipo: "admin",
      },
    });
  } catch (error) {
    console.error("Erro ao fazer login do admin:", error);
    res.status(500).json({ error: "Erro interno ao fazer login." });
  }
};

export const criarAdmin = async (req, res) => {
  const { name, email, senha } = req.body;

  if (!email || !senha || !name) {
    return res
      .status(400)
      .json({ error: "Nome, email e senha são obrigatórios." });
  }

  if (senha.length < 6) {
    return res
      .status(400)
      .json({ error: "Senha deve ter no mínimo 6 caracteres." });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        senha: senhaHash,
      },
      select: { id: true, name: true, email: true },
    });

    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error("Erro ao criar o admin: ", error);

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res.status(409).json({ error: "Este email já está em uso." });
    }

    return res.status(500).json({ error: "Erro ao criar admin." });
  }
};

export const atualizarAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, email, senha } = req.body;
  const adminLogadoId = req.usuario.id;

  try {
    const dataToUpdate = {};

    if (name) dataToUpdate.name = name;
    if (email) dataToUpdate.email = email;

    if (senha) {
      if (senha.length < 6) {
        return res
          .status(400)
          .json({ error: "Nova senha deve ter no mínimo 6 caracteres." });
      }

      dataToUpdate.senha = await bcrypt.hash(senha, 10);
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return res
        .status(400)
        .json({ error: "Nenhum dado fornecido para atualização." });
    }

    const adminAtualizado = await prisma.admin.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
      select: { id: true, name: true, email: true },
    });

    res.json(adminAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar admin: ", error);

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res
        .status(409)
        .json({ error: "Este email já pertence a outro usuário." });
    }

    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ error: "Admin não encontrado para atualização." });
    }

    res.status(500).json({ error: "Erro ao atualizar admin." });
  }
};

export const deletarAdmin = async (req, res) => {
  const { id } = req.params;
  const adminLogadoId = req.usuario.id;

  if (parseInt(id) === adminLogadoId) {
    return res
      .status(403)
      .json({ error: "Um administrador não pode se auto-deletar." });
  }

  try {
    await prisma.admin.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Admin deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar admin: ", error);

    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ error: "Admin não encontrado para deleção." });
    }

    res.status(500).json({ error: "Erro ao deletar admin." });
  }
};
