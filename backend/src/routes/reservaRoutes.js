import express from "express";
import {
  criarReserva,
  buscarReservaPorId,
  listarReservasAtivasHospede,
  listarHistoricoReservasHospede,
  listarReservasAtivasLocador,
  listarHistoricoReservasLocador,
  atualizarStatusReserva,
  listarTodasReservasAdmin,
  deletarReservaAdmin
} from "../controllers/reservaController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/reservas", autenticarToken, autorizarTipos("hospede"), criarReserva);
router.get("/reservas/:reservaId", autenticarToken, buscarReservaPorId);
router.get("/hospede/reservas", autenticarToken, autorizarTipos("hospede"), listarReservasAtivasHospede);
router.get("/hospede/reservas/historico", autenticarToken, autorizarTipos("hospede"), listarHistoricoReservasHospede);
router.get("/locador/reservas", autenticarToken, autorizarTipos("locador"), listarReservasAtivasLocador);
router.get("/locador/reservas/historico", autenticarToken, autorizarTipos("locador"), listarHistoricoReservasLocador);
router.put("/reservas/:reservaId/status", autenticarToken, autorizarTipos("hospede", "locador", "admin"), atualizarStatusReserva);
router.get("/admin/reservas", autenticarToken, autorizarTipos("admin"), listarTodasReservasAdmin);
router.delete("/admin/reservas/:reservaId", autenticarToken, autorizarTipos("admin"), deletarReservaAdmin);

export default router;