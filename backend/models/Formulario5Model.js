import { Schema, model } from "mongoose";

const formulario5Schema = new Schema (
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

        fecha_hemograma_basal: {
            type: String,
            require: true,
        },
        resultados_hemograma: {
            type: String,
            require: true,
        },
        fecha_otros_estudios_laboratorio: {
            type: String,
            require: true,
        },
        resultados_otros_estudios: {
            type: String,
            require: true,
        },
        fecha_muestra_marcadores_inflamatorios_pretratamiento: {
            type: String,
            require: true,
        },
        codigo_muestra_marcadores_inflamatorios_pretratamiento: {
            type: String,
            require: true,
        },

        // ecografia: {
        //     type: String,
        //     require: true,
        // },
        // mamografia: {
        //     type: String,
        //     require: true,
        // },
        // gamagrafia_osea: {
        //     type: String,
        //     require: true,
        // },
        // tomografia: {
        //     type: String,
        //     require: true,
        // },
        // rmn: {
        //     type: String,
        //     require: true,
        // },
        // pet: {
        //     type: String,
        //     require: true,
        // },

        tumor: {
            type: String,
            require: true,
        },
        nodulo: {
            type: String,
            require: true,
        },
        metastasis: {
            type: String,
            require: true,
        },

        estadificacion_paciente: {
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

const Formulario5 = model("Formulario5", formulario5Schema);
export default Formulario5;