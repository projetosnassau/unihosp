import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const adicionarFavorito = async (req, res) => {
  const { casaId } = req.body;
  const hospedeId = req.usuario.id; 

  console.log(`[FavoritoController] adicionarFavorito - Hóspede ID: ${hospedeId}, Casa ID: ${casaId}`);

  if (!casaId || isNaN(parseInt(casaId))) {
    return res.status(400).json({ error: "ID da casa é obrigatório e deve ser um número válido." });
  }
  const casaIdInt = parseInt(casaId);

  try {
    const casaExistente = await prisma.casa.findUnique({
      where: { id: casaIdInt },
    });
    if (!casaExistente) {
      return res.status(404).json({ error: "Casa não encontrada." });
    }

    const favoritoExistente = await prisma.favorito.findUnique({
        where: {
            hospede_casa_favorito_unique: { 
                hospedeId: hospedeId,
                casaId: casaIdInt
            }
        }
    });

    if (favoritoExistente) {
        return res.status(409).json({ error: "Esta casa já está nos seus favoritos." });
    }

    const novoFavorito = await prisma.favorito.create({
      data: {
        hospedeId: hospedeId,
        casaId: casaIdInt,
      },
      include: {
        casa: {
          select: { 
            id: true, 
            endereco: true, 
            cidade: true, 
            numero: true, 
            imagens: { take: 1, select: { url: true }, orderBy: {createdAt: 'asc'}} 
          },
        },
      },
    });
    res.status(201).json(novoFavorito);
  } catch (error) {
    console.error("[FavoritoController] Erro ao adicionar favorito:", error);
    res.status(500).json({ error: "Erro interno ao adicionar favorito." });
  }
};

export const listarFavoritosDoHospede = async (req, res) => {
  console.log('[FavoritoController] listarFavoritosDoHospede - req.usuario:', JSON.stringify(req.usuario, null, 2));
  
  if (!req.usuario || req.usuario.tipo !== 'hospede' || !req.usuario.id) {
    console.error('[FavoritoController] listarFavoritosDoHospede - Tentativa de acesso inválida ou ID do hóspede não encontrado em req.usuario.');
    return res.status(401).json({ error: "Não autorizado ou ID do hóspede não encontrado." });
  }
  const hospedeId = req.usuario.id;

  try {
    const favoritos = await prisma.favorito.findMany({
      where: { hospedeId: hospedeId },
      include: {
        casa: {
          select: {
            id: true,
            endereco: true,
            numero: true,
            cidade: true,
            estado: true,
            precoPorNoite: true,
            imagens: {
              take: 1,
              select: { url: true },
              orderBy: { createdAt: 'asc' }
            },
            locador: {
                select: { name: true }
            }
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(`[FavoritoController] Favoritos encontrados para hospedeId ${hospedeId}: ${favoritos.length}`);
    res.json(favoritos);
  } catch (error) {
    console.error("[FavoritoController] Erro ao buscar favoritos do hóspede:", error);
    res.status(500).json({ error: "Erro ao buscar favoritos." });
  }
};

export const removerFavorito = async (req, res) => {
  const { casaId } = req.params;
  const hospedeId = req.usuario.id;
  console.log(`[FavoritoController] removerFavorito - Hóspede ID: ${hospedeId}, Casa ID: ${casaId}`);


  if (isNaN(parseInt(casaId))) {
      return res.status(400).json({ error: "ID da casa deve ser um número válido." });
  }
  const casaIdInt = parseInt(casaId);

  try {
    const favoritoExistente = await prisma.favorito.findUnique({
      where: {
        hospede_casa_favorito_unique: {
          hospedeId: hospedeId,
          casaId: casaIdInt,
        },
      },
    });

    if (!favoritoExistente) {
      return res.status(404).json({ error: "Favorito não encontrado para este usuário e casa." });
    }

    await prisma.favorito.delete({
      where: { id: favoritoExistente.id },
    });
    
    res.status(200).json({ message: "Casa removida dos favoritos com sucesso." });
  } catch (error) {
    console.error("[FavoritoController] Erro ao remover favorito:", error);
    if (error.code === 'P2025') { 
        return res.status(404).json({ error: "Favorito não encontrado para remoção." });
    }
    res.status(500).json({ error: "Erro interno ao remover favorito." });
  }
};

export const listarTodosFavoritosAdmin = async (req, res) => {
  console.log('[FavoritoController] listarTodosFavoritosAdmin - req.usuario:', JSON.stringify(req.usuario, null, 2));
  try {
    const todosFavoritos = await prisma.favorito.findMany({
      include: {
        hospede: { select: { id: true, name: true, email: true } },
        casa: { 
            select: { 
                id: true, 
                endereco: true, 
                imagens: { take: 1, select: { url: true }, orderBy: {createdAt: 'asc'}} 
            } 
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(todosFavoritos);
  } catch (error) {
    console.error("[FavoritoController] Erro ao buscar todos os favoritos (admin):", error);
    res.status(500).json({ error: "Erro ao buscar todos os favoritos." });
  }
};