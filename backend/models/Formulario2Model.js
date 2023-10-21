import { Schema, model } from "mongoose";

const formulario2Schema = new Schema (
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

        signos_sintomas_inicio: {
            type: String,
            require: true,
        },
        fecha_inicio_sintomas_signos: {
            type: String,
            require: true,
        },
        tiempo_meses_diagnostico: {
            type: String,
            require: true,
        },
        tamano_tumor: {
            type: String,
            require: true,
        },
        ganglios_axilares: {
            type: String,
            require: true,
        },
        tipo_histologico: {
            type: String,
            require: true,
        },
        conclusion_informe: {
            type: String,
            require: true,
        },
        clasificacion_molecular: {
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

const Formulario2 = model("Formulario2", formulario2Schema);
export default Formulario2;