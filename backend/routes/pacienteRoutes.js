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
    registrarPacienteForm7,
    obtenerPacientesForm1,
    obtenerPacientesForm2,
    obtenerPacientesForm3,
    obtenerPacientesForm4,
    obtenerPacientesForm5,
    obtenerPacientesForm6,
    obtenerPacientesForm7,
    obtenerPacientesSAForm1,
    obtenerPacientesSAForm2,
    obtenerPacientesSAForm3,
    obtenerPacientesSAForm4,
    obtenerPacientesSAForm5,
    obtenerPacientesSAForm6,
    obtenerPacientesSAForm7,
    obtenerPacienteForm1PorIdPaciente,
    obtenerPacienteForm2PorIdPaciente,
    obtenerPacienteForm3PorIdPaciente,
    obtenerPacienteForm4PorIdPaciente,
    obtenerPacienteForm5PorIdPaciente,
    obtenerPacienteForm6PorIdPaciente,
    obtenerPacienteForm7PorIdPaciente,
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

router.get("/obtenerPacientesForm1/:idUsuario", checkAuth, obtenerPacientesForm1);
router.get("/obtenerPacientesForm2/:idUsuario", checkAuth, obtenerPacientesForm2);
router.get("/obtenerPacientesForm3/:idUsuario", checkAuth, obtenerPacientesForm3);
router.get("/obtenerPacientesForm4/:idUsuario", checkAuth, obtenerPacientesForm4);
router.get("/obtenerPacientesForm5/:idUsuario", checkAuth, obtenerPacientesForm5);
router.get("/obtenerPacientesForm6/:idUsuario", checkAuth, obtenerPacientesForm6);
router.get("/obtenerPacientesForm7/:idUsuario", checkAuth, obtenerPacientesForm7);

router.get("/obtenerPacientesSAForm1/:idUsuario", checkAuth, obtenerPacientesSAForm1);
router.get("/obtenerPacientesSAForm2/:idUsuario", checkAuth, obtenerPacientesSAForm2);
router.get("/obtenerPacientesSAForm3/:idUsuario", checkAuth, obtenerPacientesSAForm3);
router.get("/obtenerPacientesSAForm4/:idUsuario", checkAuth, obtenerPacientesSAForm4);
router.get("/obtenerPacientesSAForm5/:idUsuario", checkAuth, obtenerPacientesSAForm5);
router.get("/obtenerPacientesSAForm6/:idUsuario", checkAuth, obtenerPacientesSAForm6);
router.get("/obtenerPacientesSAForm7/:idUsuario", checkAuth, obtenerPacientesSAForm7);

router.get("/obtenerPaciente", checkAuth, obtenerPaciente);
router.get("/obtenerIds", checkAuth, obtenerIds);
router.get("/obtenerPacientePorId", checkAuth, obtenerPacientePorId);
router.get("/obtenerPacientePorId/:idUsuario/:idPaciente", checkAuth, obtenerPacientePorId)

router.get("/obtenerPacienteForm1PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm1PorIdPaciente)
router.get("/obtenerPacienteForm2PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm2PorIdPaciente)
router.get("/obtenerPacienteForm3PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm3PorIdPaciente)
router.get("/obtenerPacienteForm4PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm4PorIdPaciente)
router.get("/obtenerPacienteForm5PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm5PorIdPaciente)
router.get("/obtenerPacienteForm6PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm6PorIdPaciente)
router.get("/obtenerPacienteForm7PorIdPaciente/:idPaciente", checkAuth, obtenerPacienteForm7PorIdPaciente)

export default router;