import express from "express";
import {
  criarAvaliacao,
  listarAvaliacoesDaCasa
} from "../controllers/avaliacaoController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/reservas/:reservaId/avaliacoes",
  autenticarToken,
  autorizarTipos("hospede"),
  criarAvaliacao
);

router.get("/casas/:casaId/avaliacoes", listarAvaliacoesDaCasa);

export default router;