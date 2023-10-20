import { Router } from "express";
import { registrarPacienteForm1 } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = Router();

router.post("/registerPatients", checkAuth, registrarPacienteForm1);

// router
//     .route("/")
//     .post(checkAuth, agregarUsuario);

export default router;