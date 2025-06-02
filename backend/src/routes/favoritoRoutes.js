import express from "express";
import {
  adicionarFavorito,
  listarFavoritosDoHospede,
  removerFavorito,
  listarTodosFavoritosAdmin
} from "../controllers/favoritoController.js";
import {
  autenticarToken,
  autorizarTipos,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/favoritos", autenticarToken, autorizarTipos("hospede"), adicionarFavorito);
router.get("/hospede/favoritos", autenticarToken, autorizarTipos("hospede"), listarFavoritosDoHospede);
router.delete("/favoritos/:casaId", autenticarToken, autorizarTipos("hospede"), removerFavorito);
router.get("/admin/favoritos", autenticarToken, autorizarTipos("admin"), listarTodosFavoritosAdmin);

export default router;