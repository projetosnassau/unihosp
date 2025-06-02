import express from "express";
import {
  listarHospedes,
  buscarHospedePorId,
  criarHospede,
  loginHospede,
  atualizarHospede,
  deletarHospede,
} from "../controllers/hospedeController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/hospede", criarHospede);
router.post("/login/hospede", loginHospede);

router.get("/hospede", autenticarToken, autorizarTipos("admin"), listarHospedes);

router.get("/hospede/:id", autenticarToken, autorizarTipos("hospede", "admin"), buscarHospedePorId);

router.put("/hospede/:id", autenticarToken, autorizarTipos("hospede", "admin"), atualizarHospede);

router.delete("/hospede/:id", autenticarToken, autorizarTipos("hospede", "admin"), deletarHospede);

export default router;