import { Router } from "express";
import { obtenerPaciente, obtenerPacientePorId, registrarPacienteForm1, registrarPacienteForm2 } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
import obtenerPacientePorNumeroHC from "../middleware/getNumberHCMiddleware.js";

const router = Router();

router.post("/registerPatients", checkAuth, registrarPacienteForm1);
router.post("/registerPatientsForm2", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm2);
router.get("/obtenerPaciente", checkAuth, obtenerPaciente);
router.get("/obtenerPacientePorId/:idPaciente", checkAuth, obtenerPacientePorId);

export default router;