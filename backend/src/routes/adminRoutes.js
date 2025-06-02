import express from "express";
import {
  listarAdmins,
  buscarAdminPorId,
  loginAdmin,
  criarAdmin,
  atualizarAdmin,
  deletarAdmin,
} from "../controllers/adminController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login/admin", loginAdmin);

router.get("/admin", autenticarToken, autorizarTipos("admin"), listarAdmins);
router.get("/admin/:id", autenticarToken, autorizarTipos("admin"), buscarAdminPorId);
router.post("/admin", autenticarToken, autorizarTipos("admin"), criarAdmin);
router.put("/admin/:id", autenticarToken, autorizarTipos("admin"), atualizarAdmin);
router.delete("/admin/:id", autenticarToken, autorizarTipos("admin"), deletarAdmin);

export default router;