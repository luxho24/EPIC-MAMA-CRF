import UsuarioModel from "../models/UsuarioModel.js"
import PacienteModel from "../models/PacienteModel.js";
import Formulario2Model from "../models/Formulario2Model.js";
import Formulario3Model from "../models/Formulario3Model.js";
import Formulario4Model from "../models/Formulario4Model.js";
import Formulario5Model from "../models/Formulario5Model.js";
import Formulario6Model from "../models/Formulario6Model.js";
import Formulario7Model from "../models/Formulario7Model.js";

// * Registro de los formularios con datos del paciente
// Funcion para registrar paciente del formulario 1
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
// Funcion para registrar paciente del formulario 2
const registrarPacienteForm2 = async (req, res) => {
    const {numero_hc} = req.body;
    const form2 = new Formulario2Model(req.body);
    form2.usuario = req.usuario._id;
    form2.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario2 = await Formulario2Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 2
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }
    
    // Si el paciente existe en el formulario 1, NO se registra en formulario 2
    if (existeNumeroHcFormulario2) {
        const error = new Error("El paciente ya existe en el formulario 2");
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
// Funcion para registrar paciente del formulario 3
const registrarPacienteForm3 = async (req, res) => {
    const {numero_hc} = req.body;
    const form3 = new Formulario3Model(req.body);
    form3.usuario = req.usuario._id;
    form3.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario3 = await Formulario3Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 3
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }
    
    // Si el paciente existe en el formulario 1, NO se registra en formulario 3
    if (existeNumeroHcFormulario3) {
        const error = new Error("El paciente ya existe en el formulario 3");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form3Guardado = await form3.save();
        res.status(200).json(form3Guardado);
    } catch (error) {
        console.log(error);
    }
};
// Funcion para registrar paciente del formulario 4
const registrarPacienteForm4 = async (req, res) => {
    const {numero_hc} = req.body;
    const form4 = new Formulario4Model(req.body);
    form4.usuario = req.usuario._id;
    form4.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario4 = await Formulario4Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 4
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    // Si el paciente existe en el formulario 1, NO se registra en formulario 4
    if (existeNumeroHcFormulario4) {
        const error = new Error("El paciente ya existe en el formulario 4");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form4Guardado = await form4.save();
        res.status(200).json(form4Guardado);
    } catch (error) {
        console.log(error);
    }
};
// Funcion para registrar paciente del formulario 5
const registrarPacienteForm5 = async (req, res) => {
    const {numero_hc} = req.body;
    const form5 = new Formulario5Model(req.body);
    form5.usuario = req.usuario._id;
    form5.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario5 = await Formulario5Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 5
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    // Si el paciente existe en el formulario 1, NO se registra en formulario 5
    if (existeNumeroHcFormulario5) {
        const error = new Error("El paciente ya existe en el formulario 5");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form5Guardado = await form5.save();
        res.status(200).json(form5Guardado);
    } catch (error) {
        console.log(error);
    }
};
// Funcion para registrar paciente del formulario 6
const registrarPacienteForm6 = async (req, res) => {
    const {numero_hc} = req.body;
    const form6 = new Formulario6Model(req.body);
    form6.usuario = req.usuario._id;
    form6.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario6 = await Formulario6Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 6
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    // Si el paciente existe en el formulario 1, NO se registra en formulario 6
    if (existeNumeroHcFormulario6) {
        const error = new Error("El paciente ya existe en el formulario 6");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form6Guardado = await form6.save();
        res.status(200).json(form6Guardado);
    } catch (error) {
        console.log(error);
    }
};
// Funcion para registrar paciente del formulario 7
const registrarPacienteForm7 = async (req, res) => {
    const {numero_hc} = req.body;
    const form7 = new Formulario7Model(req.body);
    form7.usuario = req.usuario._id;
    form7.paciente = req.paciente._id;
    
    const existePaciente = await PacienteModel.findOne({ numero_hc });
    const existeNumeroHcFormulario7 = await Formulario7Model.findOne({ numero_hc });
    
    // Si el paciente existe en el formulario 1, se registra en formulario 7
    if (!existePaciente) {
        const error = new Error("El paciente no existe");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    // Si el paciente existe en el formulario 1, NO se registra en formulario 7
    if (existeNumeroHcFormulario7) {
        const error = new Error("El paciente ya existe en el formulario 7");
        // console.log(object);
        return res.status(400).json({ msg: error.message });
    }

    try {
        const form7Guardado = await form7.save();
        res.status(200).json(form7Guardado);
    } catch (error) {
        console.log(error);
    }
};

// * Obtencion de datos requeridos 
// Funcion para verificar si existe el paciente por medio de "numero_hc", segun el id del usuairo que se encuentre autenticado en ese momento
const obtenerPaciente = async (req, res) => {
    const { numero_hc } = req.query;
    try {
        const paciente = await PacienteModel.findOne({numero_hc, usuario: req.usuario._id}); // Verifica si existe el paciente segun el numero_hc y tambien revisa si coincide el id del usuario en el modelo Paciente con el id del usuario que esta autenticado en ese momento
        if (!paciente) return res.status(404).json({ msg: "No encontrado" });
        // res.status(200).json(paciente);
        res.status(200).json({msg: "Paciente encontrado"});
    } catch (error) {
        res.status(500).json({ msg: "A ocurrido un error" });
    }
};
// Funcion para solo extraer los "idUsuario" y "idPaciente"
const obtenerIds = async (req, res) => {
    // const {numero_hc} = req.body;
    const numero_hc = req.query.numero_hc;
    // const paciente = new PacienteModel(req.body);
    try {
        const paciente = await PacienteModel.findOne({numero_hc});
        if (!paciente) return res.status(404).json({ msg: "No encontrado" });
        const idUsuario = req.usuario._id;
        const idPaciente = paciente._id;
        // res.status(200).json(paciente);
        res.status(200).json({ idUsuario, idPaciente });
    } catch (error) {
        res.status(500).json({ msg: "A ocurrido un error" });
    }
    // res.status(200).json({ idUsuario, idPaciente });
};
// Funcion para extraer datos del paciente por medio de "idUsuario" y "idPaciente"
const obtenerPacientePorId = async (req, res) => {
    const { idUsuario, idPaciente } = req.params;

    try {
        // Aquí asumiremos que tienes un modelo de Mongoose llamado `Paciente` que representa a los pacientes en tu base de datos

        // Primero, verifica si el usuario existe y tiene acceso al paciente
        const usuario = await UsuarioModel.findById(idUsuario);
        if (!usuario) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Luego, busca al paciente utilizando el usuario y el pacienteId
        const paciente = await PacienteModel.findOne({ _id: idPaciente, usuario: idUsuario });

        if (!paciente) {
            return res.status(404).json({ msg: "Paciente no encontrado" });
        }

        // Si el paciente existe y está vinculado al usuario, lo devolvemos
        res.status(200).json({ paciente });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Ha ocurrido un error" });
    }
};

// * Funcion para el SUPER ADMIN
// Funcion para verificar si existe el paciente por medio de "numero_hc", SIN RESTRICCION por id de usuario
// ! Aun no esta comprobado si funciona 👇
// const obtenerPacienteSinRestriccion = async (req, res) => {
//     const { numero_hc } = req.query;
//     try {
//         const paciente = await PacienteModel.findOne({numero_hc});
//         if (!paciente) return res.status(404).json({ msg: "No encontrado" });
//         // res.status(200).json(paciente);
//         res.status(200).json({msg: "Paciente encontrado"});
//     } catch (error) {
//         res.status(500).json({ msg: "A ocurrido un error" });
//     }
// };

export {
    registrarPacienteForm1,
    registrarPacienteForm2,
    registrarPacienteForm3,
    registrarPacienteForm4,
    registrarPacienteForm5,
    registrarPacienteForm6,
    registrarPacienteForm7,
    obtenerPaciente,
    obtenerIds,
    obtenerPacientePorId
}