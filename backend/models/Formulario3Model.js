import { Schema, model } from "mongoose";

const formulario3Schema = new Schema (
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

        cuenta_consentimiento_informado: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_consentimiento_informado: {
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

const Formulario3 = model("Formulario3", formulario3Schema);
export default Formulario3;