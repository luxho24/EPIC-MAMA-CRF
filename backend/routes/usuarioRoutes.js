import { Router } from "express";
import { registrar, autenticar, obtenerUsuarioPorId } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", registrar);
router.post("/login", autenticar);
router.get("/obtenerUsuarioPorId/:idUsuario", checkAuth, obtenerUsuarioPorId);

export default router;