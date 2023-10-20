import { Router } from "express";
import { registrar, autenticar } from "../controllers/usuarioController.js";

const router = Router();

router.post("/register", registrar);
router.post("/login", autenticar);

export default router;