import { Router } from "express";
import { registrarPacienteForm1, registrarPacienteForm2 } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = Router();

router.post("/registerPatients", checkAuth, registrarPacienteForm1);
router.post("/registerPatientsForm2", checkAuth, registrarPacienteForm2);

// router
//     .route("/")
//     .post(checkAuth, agregarUsuario);

export default router;