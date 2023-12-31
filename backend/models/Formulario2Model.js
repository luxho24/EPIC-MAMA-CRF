import { Schema, model } from "mongoose";

const formulario2Schema = new Schema (
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

        signos_sintomas_inicio: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_inicio_sintomas_signos: {
            type: String,
            require: true,
            default: "-",
        },
        tiempo_meses_diagnostico: {
            type: String,
            require: true,
            default: "-",
        },
        tamano_tumor_campo1: {
            type: String,
            require: true,
            default: "-",
        },
        tamano_tumor_campo2: {
            type: String,
            require: true,
            default: "-",
        },
        ganglios_axilares: {
            type: String,
            require: true,
            default: "-",
        },
        tipo_histologico: {
            type: String,
            require: true,
            default: "-",
        },
        conclusion_informe: {
            type: String,
            require: true,
            default: "-",
        },
        clasificacion_molecular: {
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

const Formulario2 = model("Formulario2", formulario2Schema);
export default Formulario2;