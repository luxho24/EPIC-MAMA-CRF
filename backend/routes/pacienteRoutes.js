import { Router } from "express";
import {
    obtenerPaciente,
    obtenerIds,
    obtenerPacientePorId,
    registrarPacienteForm1,
    registrarPacienteForm2,
    registrarPacienteForm3,
    registrarPacienteForm4,
    registrarPacienteForm5,
    registrarPacienteForm6,
    registrarPacienteForm7
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
import obtenerPacientePorNumeroHC from "../middleware/getNumberHCMiddleware.js";

const router = Router();

router.post("/registerPatients", checkAuth, registrarPacienteForm1);
router.post("/registerPatientsForm2", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm2);
router.post("/registerPatientsForm3", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm3);
router.post("/registerPatientsForm4", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm4);
router.post("/registerPatientsForm5", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm5);
router.post("/registerPatientsForm6", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm6);
router.post("/registerPatientsForm7", checkAuth, obtenerPacientePorNumeroHC, registrarPacienteForm7);
router.get("/obtenerPaciente", checkAuth, obtenerPaciente);
router.get("/obtenerIds", checkAuth, obtenerIds);
router.get("/obtenerPacientePorId", checkAuth, obtenerPacientePorId);
router.get("/obtenerPacientePorId/:idUsuario/:idPaciente", checkAuth, obtenerPacientePorId)

export default router;