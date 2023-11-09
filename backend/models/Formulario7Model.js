import { Schema, model } from "mongoose";

const formulario7Schema = new Schema (
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

        tratamiento_medicamento_1: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_1: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_2: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_2: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_3: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_3: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_4: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_4: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_5: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_5: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_6: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_6: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_7: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_7: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_8: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_8: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_9: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_9: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_medicamento_10: {
            type: String,
            require: true,
            default: "-",
        },
        tratamiento_dosis_10: {
            type: String,
            require: true,
            default: "-",
        },
        
        fecha_tratamiento: {
            type: String,
            require: true,
            default: "-",
        },
        ciclo: {
            type: String,
            require: true,
            default: "-",
        },
        tolerancia: {
            type: String,
            require: true,
            default: "-",
        },
        evaluacion_respuesta_tratamiento: {
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

const Formulario7 = model("Formulario7", formulario7Schema);
export default Formulario7;