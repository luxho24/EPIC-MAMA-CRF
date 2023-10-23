import { Router } from "express";
import { obtenerPaciente, obtenerIds, obtenerPacientePorId, registrarPacienteForm1, registrarPacienteForm2 } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
import obtenerPacientePorNumeroHC from "../middleware/getNumberHCMiddleware.js";

const router = Router();

router.post("/registerPatients", checkAuth, registrarPacienteForm1);
router.post("/registerPatientsForm2", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm2);
router.get("/obtenerPaciente", checkAuth, obtenerPaciente);
router.get("/obtenerIds", checkAuth, obtenerIds);
router.get("/obtenerPacientePorId", checkAuth, obtenerPacientePorId);
router.get("/obtenerPacientePorId/:idUsuario/:idPaciente", checkAuth, obtenerPacientePorId)

export default router;