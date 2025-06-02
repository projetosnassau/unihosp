import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const iniciarOuObterConversa = async (req, res) => {
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;
  const { outroUsuarioId, casaId } = req.body;

  if (!outroUsuarioId || isNaN(parseInt(outroUsuarioId))) {
    return res.status(400).json({ error: "ID do outro usuário é obrigatório e deve ser um número." });
  }

  let hospedeId, locadorId;

  if (tipoUsuarioLogado === "hospede") {
    hospedeId = usuarioLogadoId;
    locadorId = parseInt(outroUsuarioId);
  } else if (tipoUsuarioLogado === "locador") {
    locadorId = usuarioLogadoId;
    hospedeId = parseInt(outroUsuarioId);
  } else {
    return res.status(403).json({ error: "Apenas hóspedes ou locadores podem iniciar conversas." });
  }

  try {
    const hospedeExiste = await prisma.hospede.findUnique({ where: { id: hospedeId } });
    const locadorExiste = await prisma.locador.findUnique({ where: { id: locadorId } });

    if (!hospedeExiste) return res.status(404).json({ error: "Hóspede da conversa não encontrado." });
    if (!locadorExiste) return res.status(404).json({ error: "Locador da conversa não encontrado." });

    const parsedCasaId = casaId ? parseInt(casaId) : null;
    if (casaId && isNaN(parsedCasaId)) {
        return res.status(400).json({ error: "ID da casa inválido." });
    }

    let conversa = await prisma.conversa.findFirst({
      where: {
        hospedeId: hospedeId,
        locadorId: locadorId,
        casaId: parsedCasaId,
      },
      include: {
        hospede: { select: { id: true, name: true, email: true } },
        locador: { select: { id: true, name: true, email: true } },
        casa: parsedCasaId ? { select: {id: true, endereco: true, numero: true} } : undefined
      }
    });

    if (conversa) {
      return res.status(200).json(conversa);
    } else {
      if (parsedCasaId) {
        const casaExiste = await prisma.casa.findUnique({ where: { id: parsedCasaId }});
        if (!casaExiste) return res.status(404).json({ error: "Casa especificada não encontrada."});
        if (casaExiste.locadorId !== locadorId) {
            return res.status(403).json({ error: "Esta casa não pertence ao locador especificado para a conversa."})
        }
      }
      conversa = await prisma.conversa.create({
        data: {
          hospedeId: hospedeId,
          locadorId: locadorId,
          casaId: parsedCasaId,
        },
        include: {
          hospede: { select: { id: true, name: true, email: true } },
          locador: { select: { id: true, name: true, email: true } },
          casa: parsedCasaId ? { select: {id: true, endereco: true, numero: true} } : undefined
        }
      });
      return res.status(201).json(conversa);
    }
  } catch (error) {
    console.error("Erro ao iniciar/obter conversa:", error);
    if (error.code === 'P2002') {
        return res.status(409).json({ error: "Uma conversa com estes participantes (e casa, se aplicável) já existe." });
    }
    res.status(500).json({ error: "Erro interno ao processar conversa." });
  }
};

export const listarConversasUsuario = async (req, res) => {
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;

  let whereClause;
  if (tipoUsuarioLogado === "hospede") {
    whereClause = { hospedeId: usuarioLogadoId };
  } else if (tipoUsuarioLogado === "locador") {
    whereClause = { locadorId: usuarioLogadoId };
  } else {
    return res.status(400).json({ error: "Tipo de usuário inválido." });
  }

  try {
    const conversas = await prisma.conversa.findMany({
      where: whereClause,
      include: {
        hospede: { select: { id: true, name: true, email: true } },
        locador: { select: { id: true, name: true, email: true } },
        casa: { select: {id: true, endereco: true, numero: true, imagens: { take: 1, select: {url: true}}}},
        mensagens: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          select: { id: true, conteudo: true, createdAt: true, remetenteHospedeId: true, remetenteLocadorId: true, lidaPeloHospede: true, lidaPeloLocador: true }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    const conversasComContagem = await Promise.all(
      conversas.map(async (conversa) => {
        let contagemNaoLidas = 0;
        if (tipoUsuarioLogado === "hospede") {
          contagemNaoLidas = await prisma.mensagem.count({
            where: {
              conversaId: conversa.id,
              remetenteLocadorId: conversa.locadorId,
              lidaPeloHospede: false,
            },
          });
        } else { 
          contagemNaoLidas = await prisma.mensagem.count({
            where: {
              conversaId: conversa.id,
              remetenteHospedeId: conversa.hospedeId,
              lidaPeloLocador: false,
            },
          });
        }
        return { ...conversa, contagemNaoLidas };
      })
    );
    res.json(conversasComContagem);
  } catch (error) {
    console.error("Erro ao listar conversas:", error);
    res.status(500).json({ error: "Erro interno ao buscar suas conversas.", details: error.message });
  }
};

export const buscarDetalhesConversa = async (req, res) => {
  const { conversaId } = req.params;
  const usuarioLogado = req.usuario;
  try {
    const conversa = await prisma.conversa.findUnique({
      where: { id: parseInt(conversaId) },
      include: {
        hospede: { select: { id: true, name: true, email: true } },
        locador: { select: { id: true, name: true, email: true } },
        casa: { select: { id: true, endereco: true, numero: true } },
      },
    });
    if (!conversa) {
      return res.status(404).json({ error: "Conversa não encontrada." });
    }
    const ehParticipante =
      (usuarioLogado.tipo === "hospede" && conversa.hospedeId === usuarioLogado.id) ||
      (usuarioLogado.tipo === "locador" && conversa.locadorId === usuarioLogado.id) ||
      usuarioLogado.tipo === "admin";
    if (!ehParticipante) {
      return res.status(403).json({ error: "Acesso negado a esta conversa." });
    }
    res.json(conversa);
  } catch (error) {
    console.error("Erro ao buscar detalhes da conversa:", error);
    res.status(500).json({ error: "Erro interno ao buscar detalhes da conversa."});
  }
};


export const listarMensagensConversa = async (req, res) => {
  const { conversaId } = req.params;
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;
  const { page = 1, limit = 20 } = req.query;

  try {
    const conversa = await prisma.conversa.findUnique({
      where: { id: parseInt(conversaId) },
    });
    if (!conversa) {
      return res.status(404).json({ error: "Conversa não encontrada." });
    }
    if (
      (tipoUsuarioLogado === "hospede" && conversa.hospedeId !== usuarioLogadoId) ||
      (tipoUsuarioLogado === "locador" && conversa.locadorId !== usuarioLogadoId)
    ) {
      return res.status(403).json({ error: "Acesso negado a esta conversa." });
    }
    const mensagens = await prisma.mensagem.findMany({
      where: { conversaId: parseInt(conversaId) },
      orderBy: { createdAt: "asc" },
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
      include: {
        remetenteHospede: { select: { id:true, name: true } },
        remetenteLocador: { select: { id:true, name: true } }
      }
    });
    res.json(mensagens);
  } catch (error) {
    console.error("Erro ao buscar mensagens da conversa:", error);
    res.status(500).json({ error: "Erro interno ao buscar mensagens." });
  }
};

export const enviarMensagem = async (req, res) => {
  const { conversaId } = req.params;
  const { conteudo } = req.body;
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;

  if (!conteudo || conteudo.trim() === "") {
    return res.status(400).json({ error: "Conteúdo da mensagem não pode ser vazio." });
  }
  try {
    const conversa = await prisma.conversa.findUnique({
      where: { id: parseInt(conversaId) },
    });
    if (!conversa) {
      return res.status(404).json({ error: "Conversa não encontrada." });
    }
    if (
      (tipoUsuarioLogado === "hospede" && conversa.hospedeId !== usuarioLogadoId) ||
      (tipoUsuarioLogado === "locador" && conversa.locadorId !== usuarioLogadoId)
    ) {
      return res.status(403).json({ error: "Você não pode enviar mensagens nesta conversa." });
    }
    const dataMensagem = {
      conteudo: conteudo,
      conversaId: parseInt(conversaId),
      lidaPeloHospede: false, 
      lidaPeloLocador: false,
    };
    if (tipoUsuarioLogado === "hospede") {
      dataMensagem.remetenteHospedeId = usuarioLogadoId;
      dataMensagem.lidaPeloHospede = true;
    } else if (tipoUsuarioLogado === "locador") {
      dataMensagem.remetenteLocadorId = usuarioLogadoId;
      dataMensagem.lidaPeloLocador = true;
    } else {
       return res.status(403).json({ error: "Tipo de usuário inválido para enviar mensagem." });
    }
    const novaMensagem = await prisma.mensagem.create({
      data: dataMensagem,
      include: {
        remetenteHospede: { select: { id:true, name: true } },
        remetenteLocador: { select: { id:true, name: true } }
      }
    });
    await prisma.conversa.update({
        where: { id: parseInt(conversaId) },
        data: { updatedAt: new Date() }
    });
    res.status(201).json(novaMensagem);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    res.status(500).json({ error: "Erro interno ao enviar mensagem." });
  }
};

export const marcarMensagensComoLidas = async (req, res) => {
  const { conversaId } = req.params;
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;
  try {
    const conversa = await prisma.conversa.findUnique({
      where: { id: parseInt(conversaId) },
    });
    if (!conversa) {
      return res.status(404).json({ error: "Conversa não encontrada." });
    }
    if (
      (tipoUsuarioLogado === "hospede" && conversa.hospedeId !== usuarioLogadoId) ||
      (tipoUsuarioLogado === "locador" && conversa.locadorId !== usuarioLogadoId)
    ) {
      return res.status(403).json({ error: "Acesso negado a esta conversa." });
    }
    if (tipoUsuarioLogado === "hospede") {
      await prisma.mensagem.updateMany({
        where: {
          conversaId: parseInt(conversaId),
          remetenteLocadorId: conversa.locadorId,
          lidaPeloHospede: false,
        },
        data: { lidaPeloHospede: true },
      });
    } else { 
      await prisma.mensagem.updateMany({
        where: {
          conversaId: parseInt(conversaId),
          remetenteHospedeId: conversa.hospedeId,
          lidaPeloLocador: false,
        },
        data: { lidaPeloLocador: true },
      });
    }
    res.status(200).json({ message: "Mensagens marcadas como lidas." });
  } catch (error) {
    console.error("Erro ao marcar mensagens como lidas:", error);
    res.status(500).json({ error: "Erro interno ao marcar mensagens como lidas." });
  }
};

export const obterTotalMensagensNaoLidas = async (req, res) => {
  const usuarioLogadoId = req.usuario.id;
  const tipoUsuarioLogado = req.usuario.tipo;
  let contagemTotalNaoLidas = 0;
  try {
    if (tipoUsuarioLogado === "hospede") {
      contagemTotalNaoLidas = await prisma.mensagem.count({
        where: {
          conversa: { hospedeId: usuarioLogadoId },
          remetenteLocadorId: { not: null },
          lidaPeloHospede: false,
        },
      });
    } else if (tipoUsuarioLogado === "locador") {
      contagemTotalNaoLidas = await prisma.mensagem.count({
        where: {
          conversa: { locadorId: usuarioLogadoId },
          remetenteHospedeId: { not: null },
          lidaPeloLocador: false,
        },
      });
    } else {
      return res.status(400).json({ error: "Tipo de usuário inválido." });
    }
    res.json({ totalNaoLidas: contagemTotalNaoLidas });
  } catch (error) {
    console.error("Erro ao buscar contagem total de mensagens não lidas:", error);
    res.status(500).json({ error: "Erro ao buscar contagem de mensagens não lidas." });
  }
};

export const excluirConversa = async (req, res) => {
  const { conversaId } = req.params;
  const usuarioLogado = req.usuario;
  try {
    const conversa = await prisma.conversa.findUnique({
      where: { id: parseInt(conversaId) },
    });
    if (!conversa) {
      return res.status(404).json({ error: "Conversa não encontrada." });
    }
    const ehParticipante =
      (usuarioLogado.tipo === "hospede" && conversa.hospedeId === usuarioLogado.id) ||
      (usuarioLogado.tipo === "locador" && conversa.locadorId === usuarioLogado.id) ||
      usuarioLogado.tipo === "admin";
    if (!ehParticipante) {
      return res.status(403).json({ error: "Você não tem permissão para excluir esta conversa." });
    }
    await prisma.conversa.delete({
      where: { id: parseInt(conversaId) },
    });
    res.status(200).json({ message: "Conversa excluída com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir conversa:", error);
    if (error.code === 'P2025') {
        return res.status(404).json({ error: "Conversa não encontrada para exclusão." });
    }
    res.status(500).json({ error: "Erro interno ao excluir a conversa."});
  }
};