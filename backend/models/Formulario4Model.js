import { Schema, model } from "mongoose";

const formulario4Schema = new Schema (
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

        criterios_inclusion_1: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_2: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_3: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_4: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_5: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_6: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_inclusion_7: {
            type: String,
            require: true,
            default: "-",
        },

        criterios_exclusion_1: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_exclusion_2: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_exclusion_3: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_exclusion_4: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_exclusion_5: {
            type: String,
            require: true,
            default: "-",
        },
        criterios_exclusion_6: {
            type: String,
            require: true,
            default: "-",
        },
        
        criterios_elegibilidad_estudio: {
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

const Formulario4 = model("Formulario4", formulario4Schema);
export default Formulario4;