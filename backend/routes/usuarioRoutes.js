import { Router } from "express";
import { registrar, autenticar, obtenerUsuarioPorId } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
import getIdUserToken from "../middleware/getIdUserToken.js"
import getUserToken from "../middleware/getUserToken.js"

const router = Router();

router.post("/register", registrar);
router.post("/login", autenticar);
router.get("/obtenerUsuarioPorId/:idUsuario", checkAuth, obtenerUsuarioPorId);

router.post('/obtenerIdUsuarioToken', checkAuth, getIdUserToken)
router.post('/obtenerUsuarioToken', checkAuth, getUserToken)

export default router;