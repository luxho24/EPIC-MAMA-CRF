import PacienteModel from "../models/PacienteModel.js";

// Middleware para obtener el paciente por número de historia clínica
const obtenerPacientePorNumeroHC = async (req, res, next) => {
    const { numero_hc } = req.body;
    try {
        const paciente = await PacienteModel.findOne({ numero_hc });
        if (!paciente) {
            return res.status(400).json({ msg: "Paciente no encontrado" });
        }
        req.paciente = paciente;
        console.log(req.paciente);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener el paciente" });
    }
};

export default obtenerPacientePorNumeroHC;