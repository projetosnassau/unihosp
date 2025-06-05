import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
// SELECT * FROM TABELA
export const listarHospedes = async (req, res) => {
  try {
    const hospedes = await prisma.hospede.findMany({
      select: { id:true, name:true, email:true, cpf:true, cep:true, cidade:true, estado:true, matricula:true, universidade:true }
    });
    res.json(hospedes);
  } catch (error) {
    console.error("Erro ao buscar hóspedes: ", error);
    res.status(500).json({ error: "Erro ao buscar hóspedes" });
  }
};
// SELECT COLUNA FROM TABELA
export const buscarHospedePorId = async (req, res) => {
  const { id } = req.params;
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "hospede" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Acesso negado ao perfil de outro hóspede." });
  }

  try {
    const hospede = await prisma.hospede.findUnique({
      where: { id: parseInt(id) },
      select: { 
        id:true, 
        name:true, 
        email:true, 
        cpf:true, 
        cep:true, 
        cidade:true, 
        estado:true, 
        matricula:true, 
        universidade:true 
      }
    });
    if (!hospede) {
      return res.status(404).json({ error: "Hóspede não encontrado" });
    }
    res.json(hospede);
  } catch (error) {
    console.error(`Erro ao buscar hóspede ID ${id}:`, error); 
    res.status(500).json({ error: "Erro ao buscar hóspede" });
  }
};

export const criarHospede = async (req, res) => {
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

  if (!name || !email || !senha || !cpf || !matricula) {
    return res.status(400).json({ error: "Nome, email, senha, CPF e matrícula são obrigatórios." });
  }
  if (senha.length < 6) {
      return res.status(400).json({ error: "Senha deve ter no mínimo 6 caracteres." });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const newHospede = await prisma.hospede.create({
      data: {
        name,
        email,
        senha: senhaHash,
        cpf,
        cep: cep || null,
        cidade: cidade || null,
        estado: estado || null,
        matricula,
        universidade: universidade || null,
      },
      select: { id: true, name: true, email: true }
    });
    return res.status(201).json(newHospede);
  } catch (error) {
    console.error("Erro ao criar hóspede: ", error);
    if (error.code === "P2002") {
      let campoConflito = "desconhecido";
      if (error.meta?.target?.includes("email")) campoConflito = "email";
      else if (error.meta?.target?.includes("cpf")) campoConflito = "CPF";
      else if (error.meta?.target?.includes("matricula")) campoConflito = "matrícula";
      return res.status(409).json({ error: `Este ${campoConflito} já está em uso.` });
    }
    return res.status(500).json({ error: "Erro ao criar hóspede." });
  }
};

export const loginHospede = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }
  try {
    const hospede = await prisma.hospede.findUnique({ where: { email } });
    if (!hospede) {
      return res.status(404).json({ error: "Hóspede não encontrado com este email." });
    }
    const senhaCorreta = await bcrypt.compare(senha, hospede.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta." });
    }
    const token = jwt.sign(
      { id: hospede.id, tipo: "hospede", name: hospede.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const { senha: _, ...hospedeInfo } = hospede;
    res.json({ token, usuario: {...hospedeInfo, tipo: 'hospede'} });
  } catch (error) {
    console.error("Erro ao fazer login do hóspede:", error);
    res.status(500).json({ error: "Erro interno ao fazer login." });
  }
};

export const atualizarHospede = async (req, res) => {
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
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "hospede" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Acesso negado: Você só pode atualizar seu próprio perfil." });
  }

  try {
    const hospedeExistente = await prisma.hospede.findUnique({
      where: { id: parseInt(id) },
    });

    if (!hospedeExistente) {
      return res.status(404).json({ error: "Hóspede não encontrado." });
    }

    const dataToUpdate = {};
    if (name !== undefined) dataToUpdate.name = name;
    if (email !== undefined) dataToUpdate.email = email;
    if (senha) {
      if (senha.length < 6) {
        return res.status(400).json({ error: "Nova senha deve ter no mínimo 6 caracteres."});
      }
      dataToUpdate.senha = await bcrypt.hash(senha, 10);
    }
    if (cpf !== undefined) dataToUpdate.cpf = cpf;
    if (matricula !== undefined) dataToUpdate.matricula = matricula;
    if (cep !== undefined) dataToUpdate.cep = cep || null;
    if (cidade !== undefined) dataToUpdate.cidade = cidade || null;
    if (estado !== undefined) dataToUpdate.estado = estado || null;
    if (universidade !== undefined) dataToUpdate.universidade = universidade || null;
    
    if (Object.keys(dataToUpdate).length === 0) {
        return res.status(400).json({ error: "Nenhum dado fornecido para atualização." });
    }

    const hospedeAtualizado = await prisma.hospede.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
      select: { id:true, name:true, email:true, cpf:true, cep:true, cidade:true, estado:true, matricula:true, universidade:true }
    });

    return res.status(200).json(hospedeAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar hóspede: ", error);
    if (error.code === "P2002") {
        let campoConflito = "desconhecido";
        if (error.meta?.target?.includes("email")) campoConflito = "email";
        else if (error.meta?.target?.includes("cpf")) campoConflito = "CPF";
        else if (error.meta?.target?.includes("matricula")) campoConflito = "matrícula";
        return res.status(409).json({ error: `Este ${campoConflito} já pertence a outro usuário.` });
    }
    if (error.code === "P2025") {
        return res.status(404).json({ error: "Hóspede não encontrado para atualização." });
    }
    return res.status(500).json({ error: "Erro ao atualizar hóspede." });
  }
};

export const deletarHospede = async (req, res) => {
  const { id } = req.params;
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "hospede" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Acesso negado: Você só pode deletar seu próprio perfil." });
  }

  try {
    await prisma.hospede.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Hóspede excluído com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir hóspede:", error);
    if (error.code === "P2025") {
        return res.status(404).json({ error: "Hóspede não encontrado para deleção." });
    }
    res.status(500).json({ error: "Erro ao excluir hóspede." });
  }
};