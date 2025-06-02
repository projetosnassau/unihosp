import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const listarLocadores = async (req, res) => {
  try {
    const locadores = await prisma.locador.findMany({
      select: { id: true, name: true, email: true, cpf: true, endereco: true, cep: true, cidade: true, estado: true }
    });
    res.json(locadores);
  } catch (error) {
    console.error("Erro ao buscar locadores: ", error);
    res.status(500).json({ error: "Erro ao buscar locadores" });
  }
};

export const buscarLocadorPorId = async (req, res) => {
  const { id } = req.params;
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "locador" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Acesso negado ao perfil de outro locador." });
  }

  try {
    const locador = await prisma.locador.findUnique({
      where: { id: parseInt(id) },
      include: {
        casas: {
          orderBy: { id: 'asc' },
          include: {
            imagens: { 
              take: 1, 
              select: { url: true }, 
              orderBy: { createdAt: 'asc' } 
            }
          }
        }
      },
    });

    if (!locador) {
      return res.status(404).json({ error: "Locador não encontrado" });
    }
    const { senha, ...locadorSemSenha } = locador;
    res.json(locadorSemSenha);
  } catch (error) {
    console.error(`Erro ao buscar locador ID ${id}:`, error);
    res.status(500).json({ error: "Erro ao buscar locador" });
  }
};

export const loginLocador = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }
  try {
    const locador = await prisma.locador.findUnique({ where: { email } });
    if (!locador) {
      return res.status(404).json({ error: "Locador não encontrado com este email." });
    }
    const senhaCorreta = await bcrypt.compare(senha, locador.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: "Senha incorreta." });
    }
    const token = jwt.sign(
      { id: locador.id, tipo: "locador", name: locador.name },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    const { senha: _, ...locadorInfo } = locador;
    res.json({ token, usuario: {...locadorInfo, tipo: 'locador'} });
  } catch (error) {
    console.error("Erro ao fazer login do locador:", error);
    res.status(500).json({ error: "Erro interno ao fazer login." });
  }
};

export const criarLocador = async (req, res) => {
  const { name, email, senha, cpf, endereco, cep, cidade, estado } = req.body;
  if (!name || !email || !senha || !cpf || !endereco ) {
    return res.status(400).json({ error: "Nome, email, senha, CPF e endereço são obrigatórios." });
  }
   if (senha.length < 6) {
      return res.status(400).json({ error: "Senha deve ter no mínimo 6 caracteres." });
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
        cep: cep || null,
        cidade: cidade || null,
        estado: estado || null,
      },
      select: { id:true, name:true, email:true, cpf:true, endereco:true, cep:true, cidade:true, estado:true }
    });
    return res.status(201).json(newLocador);
  } catch (error) {
    console.error("Erro ao criar locador: ", error);
    if (error.code === "P2002") {
      let campoConflito = "desconhecido";
      if (error.meta?.target?.includes("email")) campoConflito = "email";
      else if (error.meta?.target?.includes("cpf")) campoConflito = "CPF";
      return res.status(409).json({ error: `Este ${campoConflito} já está em uso.` });
    }
    return res.status(500).json({ error: "Erro ao criar locador." });
  }
};

export const atualizarLocador = async (req, res) => {
  const { id } = req.params;
  const { name, email, senha, cpf, endereco, cep, cidade, estado } = req.body;
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "locador" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Acesso negado: Você só pode atualizar seu próprio perfil." });
  }

  try {
    const locadorExistente = await prisma.locador.findUnique({
      where: { id: parseInt(id) },
    });
    if (!locadorExistente) {
      return res.status(404).json({ error: "Locador não encontrado." });
    }

    const dataToUpdate = {};
    if (name !== undefined && name !== locadorExistente.name) dataToUpdate.name = name;
    if (email !== undefined && email !== locadorExistente.email) dataToUpdate.email = email;
    if (senha && senha.trim() !== "") {
      if(senha.length < 6) {
        return res.status(400).json({ error: "Nova senha deve ter no mínimo 6 caracteres."});
      }
      dataToUpdate.senha = await bcrypt.hash(senha, 10);
    }
    if (cpf !== undefined && cpf !== locadorExistente.cpf) dataToUpdate.cpf = cpf;
    if (endereco !== undefined && endereco !== locadorExistente.endereco) dataToUpdate.endereco = endereco;
    if (cep !== undefined && cep !== locadorExistente.cep) dataToUpdate.cep = cep || null;
    if (cidade !== undefined && cidade !== locadorExistente.cidade) dataToUpdate.cidade = cidade || null;
    if (estado !== undefined && estado !== locadorExistente.estado) dataToUpdate.estado = estado || null;
    
    if (Object.keys(dataToUpdate).length === 0) {
        return res.status(400).json({ error: "Nenhum dado novo fornecido para atualização." });
    }

    const locadorAtualizado = await prisma.locador.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
      select: { id:true, name:true, email:true, cpf:true, endereco:true, cep:true, cidade:true, estado:true }
    });
    return res.status(200).json(locadorAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar locador: ", error);
    if (error.code === "P2002") {
        let campoConflito = "desconhecido";
        if (error.meta?.target?.includes("email")) campoConflito = "email";
        else if (error.meta?.target?.includes("cpf")) campoConflito = "CPF";
        return res.status(409).json({ error: `Este ${campoConflito} já pertence a outro usuário.` });
    }
    if (error.code === "P2025") {
        return res.status(404).json({ error: "Locador não encontrado para atualização." });
    }
    return res.status(500).json({ error: "Erro interno ao atualizar locador." });
  }
};

export const deletarLocador = async (req, res) => {
  const { id } = req.params;
  const usuarioLogado = req.usuario;

  if (usuarioLogado.tipo === "locador" && usuarioLogado.id !== parseInt(id)) {
    return res.status(403).json({ error: "Você não tem permissão para deletar este locador." });
  }

  try {
    const locadorParaDeletar = await prisma.locador.findUnique({ where: { id: parseInt(id) } });
    if (!locadorParaDeletar) {
        return res.status(404).json({ error: "Locador não encontrado para deleção." });
    }

    await prisma.locador.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Locador e todos os seus dados associados foram excluídos com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir locador:", error);
    if (error.code === "P2025") {
        return res.status(404).json({ error: "Locador não encontrado para deleção." });
    }
    if (error.code === "P2003") {
        console.error("Falha na restrição de chave estrangeira ao deletar locador:", error.meta);
        return res.status(409).json({ error: "Não foi possível deletar o locador pois existem dados relacionados (ex: casas, reservas) que não puderam ser removidos. Verifique as dependências." });
    }
    res.status(500).json({ error: "Erro interno ao excluir locador." });
  }
};