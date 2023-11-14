import { Router } from "express";
import { registrar, autenticar, obtenerUsuarioPorId } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
import getIdUserToken from "../middleware/getIdUserToken.js"
import getUserToken from "../middleware/getUserToken.js"
import getRolUserToken from "../middleware/getRolUserToken.js"

const router = Router();

router.post("/register", registrar);
router.post("/", autenticar);
router.get("/obtenerUsuarioPorId/:idUsuario", checkAuth, obtenerUsuarioPorId);

router.post('/obtenerIdUsuarioToken', checkAuth, getIdUserToken)
router.post('/obtenerUsuarioToken', checkAuth, getUserToken)
router.post('/obtenerRolUsuarioToken', checkAuth, getRolUserToken)

export default router;