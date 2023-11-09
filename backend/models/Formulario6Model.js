import { Schema, model } from "mongoose";

const formulario6Schema = new Schema (
    {
        // Borrar: Se traera automaticamente del modelo Paciente
        iniciales_paciente: {
            type: String,
            require: true,
            default: "-",
        },
        numero_hc: {
            type: String,
            require: true,
            default: "-",
        },
        centro_institucion_atencion: {
            type: String,
            require: true,
            default: "-",
        },
        // Borrar: Se traera automaticamente del modelo Paciente

        cirugia: {
            type: String,
            require: true,
            default: "-",
        },
        tipo_cirugia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_procedimiento: {
            type: String,
            require: true,
            default: "-",
        },
        recibio_radioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_inicio_recibio_radioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_termino_recibio_radioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        recibio_hormonoterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_inicio_recibio_hormonoterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_termino_recibio_hormonoterapia: {
            type: String,
            require: true,
            default: "-",
        },
        recibio_quimioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_inicio_recibio_quimioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_termino_recibio_quimioterapia: {
            type: String,
            require: true,
            default: "-",
        },
        detallar_medicacion_paciente_toma_recibe: {
            type: String,
            require: true,
            default: "-",
        },
        // detallar_medicacion_paciente_toma_recibe_aines: {
        //     type: String,
        //     require: true,
        //     default: "-",
        // },
        // detallar_medicacion_paciente_toma_recibe_corticoides: {
        //     type: String,
        //     require: true,
        //     default: "-",
        // },
        detallar_medicacion_paciente_toma_recibe_otros: {
            type: String,
            require: true,
            default: "-",
        },
        
        nombre: {
            type: String,
            require: true,
            default: "-",
        },
        fecha: {
            type: String,
            require: true,
            default: "-",
        },
        firma: {
            type: String,
            require: true,
            default: "-",
        },

        usuario: {
            type: Schema.Types.ObjectId,
            ref: "UsuarioModel",
        },
        paciente: {
            type: Schema.Types.ObjectId,
            ref: "PacienteModel",
        },
    }
)

const Formulario6 = model("Formulario6", formulario6Schema);
export default Formulario6;