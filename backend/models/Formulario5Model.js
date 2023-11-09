import { Schema, model } from "mongoose";

const formulario5Schema = new Schema (
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

        
        resultados_hemograma: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_hemograma: {
            type: String,
            require: true,
            default: "-",
        },
        resultados_otros_estudios: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_otros_estudios: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos: {
            type: String,
            require: true,
            default: "-",
        },
        codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_muestra_tumor: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_microbioma_intestinal: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_microbioma_salival: {
            type: String,
            require: true,
            default: "-",
        },

        ecografia: {
            type: String,
            require: true,
            default: "-",
        },
        mamografia: {
            type: String,
            require: true,
            default: "-",
        },
        gamagrafia_osea: {
            type: String,
            require: true,
            default: "-",
        },
        tomografia: {
            type: String,
            require: true,
            default: "-",
        },
        rmn: {
            type: String,
            require: true,
            default: "-",
        },
        pet: {
            type: String,
            require: true,
            default: "-",
        },

        tumor: {
            type: String,
            require: true,
            default: "-",
        },
        nodulo: {
            type: String,
            require: true,
            default: "-",
        },
        metastasis: {
            type: String,
            require: true,
            default: "-",
        },

        estadificacion_paciente: {
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

const Formulario5 = model("Formulario5", formulario5Schema);
export default Formulario5;