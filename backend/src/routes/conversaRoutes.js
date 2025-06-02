import express from "express";
import {
  iniciarOuObterConversa,
  listarConversasUsuario,
  buscarDetalhesConversa,
  listarMensagensConversa,
  enviarMensagem,
  marcarMensagensComoLidas,
  obterTotalMensagensNaoLidas,
  excluirConversa
} from "../controllers/conversaController.js";
import { autenticarToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/conversas", autenticarToken, iniciarOuObterConversa);

router.get("/conversas", autenticarToken, listarConversasUsuario);

router.get("/conversas/detalhes/:conversaId", autenticarToken, buscarDetalhesConversa);

router.get("/conversas/:conversaId/mensagens", autenticarToken, listarMensagensConversa);

router.post("/conversas/:conversaId/mensagens", autenticarToken, enviarMensagem);

router.put("/conversas/:conversaId/marcar-como-lidas", autenticarToken, marcarMensagensComoLidas);

router.get("/mensagens/nao-lidas/total", autenticarToken, obterTotalMensagensNaoLidas);

router.delete("/conversas/:conversaId", autenticarToken, excluirConversa);

export default router;