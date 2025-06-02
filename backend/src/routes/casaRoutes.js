import express from "express";
import {
  listarCasas,
  buscarCasaPorId,
  criarCasa,
  atualizarCasa,
  deletarCasa,
  listarBloqueiosCasa,
  adicionarBloqueioCasa,
  removerBloqueioCasa
} from "../controllers/casaController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/casa", listarCasas);
router.get("/casa/:id", buscarCasaPorId);

router.post(
  "/casa",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  criarCasa
);

router.put(
  "/casa/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  atualizarCasa
);

router.delete(
  "/casa/:id",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  deletarCasa
);

router.get(
  "/casas/:casaId/bloqueios",
  autenticarToken,
  listarBloqueiosCasa
);

router.post(
  "/casas/:casaId/bloqueios",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  adicionarBloqueioCasa
);

router.delete(
  "/bloqueios/:bloqueioId",
  autenticarToken,
  autorizarTipos("locador", "admin"),
  removerBloqueioCasa
);

export default router;