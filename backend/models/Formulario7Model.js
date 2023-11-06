import { Schema, model } from "mongoose";

const formulario7Schema = new Schema (
    {
        // Borrar: Se traera automaticamente del modelo Paciente
        iniciales_paciente: {
            type: String,
            require: true,
        },
        numero_hc: {
            type: String,
            require: true,
        },
        centro_institucion_atencion: {
            type: String,
            require: true,
        },
        // Borrar: Se traera automaticamente del modelo Paciente

        cuenta_consentimiento_informado: {
            type: String,
            require: true,
        },
        fecha_consentimiento_informado: {
            type: String,
            require: true,
        },

        nombre: {
            type: String,
            require: true,
        },
        fecha: {
            type: String,
            require: true,
        },
        firma: {
            type: String,
            require: true,
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

const Formulario7 = model("Formulario7", formulario7Schema);
export default Formulario7;