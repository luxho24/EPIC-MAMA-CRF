import PacienteModel from "../models/PacienteModel.js";
import Formulario2Model from "../models/Formulario2Model.js";

const registrarPacienteForm1 = async (req, res) => {
    const {numero_documento} = req.body;
    const paciente = new PacienteModel(req.body);
    paciente.usuario = req.usuario._id;

    const existePaciente = await PacienteModel.findOne({ numero_documento });

    if (existePaciente) {
        const error = new Error("El paciente ya existe");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const pacienteGuardado = await paciente.save();
        res.status(200).json(pacienteGuardado);
    } catch (error) {
        console.log(error);
    }
};

const registrarPacienteForm2 = async (req, res) => {
    const {numero_hc} = req.body;
    const form2 = new Formulario2Model(req.body);
    form2.usuario = req.usuario._id;
    form2.paciente = req.paciente._id;
    
    const existePaciente = await Formulario2Model.findOne({ numero_hc });
    
    if (existePaciente) {
        const error = new Error("El paciente ya existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form2Guardado = await form2.save();
        res.status(200).json(form2Guardado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerPaciente = async (req, res) => {
    const { numero_hc } = req.query;
    try {
        const paciente = await PacienteModel.findOne({numero_hc});
        if (!paciente) return res.status(404).json({ msg: "No encontrado" });
        // res.status(200).json(paciente);
        res.status(200).json({msg: "Paciente encontrado"});
    } catch (error) {
        res.status(500).json({ msg: "A ocurrido un error" });
    }
};

const obtenerPacientePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await PacienteModel.findById(id);
        if (!paciente) return res.status(404).json({ msg: "No encontrado" });
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ msg: "A ocurrido un error" });
    }
};

export {
    registrarPacienteForm1,
    registrarPacienteForm2,
    obtenerPaciente,
    obtenerPacientePorId
}