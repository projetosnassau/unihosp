import express from "express";
import {
  listarLocadores,
  buscarLocadorPorId,
  loginLocador,
  criarLocador,
  atualizarLocador,
  deletarLocador,
} from "../controllers/locadorController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/locador", criarLocador);
router.post("/locador/login", loginLocador);

router.get("/locador", autenticarToken, autorizarTipos("admin"), listarLocadores);

router.get("/locador/:id", autenticarToken, autorizarTipos("locador", "admin"), buscarLocadorPorId);
router.put("/locador/:id", autenticarToken, autorizarTipos("locador", "admin"), atualizarLocador);
router.delete("/locador/:id", autenticarToken, autorizarTipos("locador", "admin"), deletarLocador);

export default router;