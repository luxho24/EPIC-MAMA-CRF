import { Schema, model } from "mongoose";

const formulario6Schema = new Schema (
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

        cirugia: {
            type: String,
            require: true,
        },
        tipo_cirugia: {
            type: String,
            require: true,
        },
        fecha_procedimiento: {
            type: String,
            require: true,
        },
        recibio_radioterapia: {
            type: String,
            require: true,
        },
        fecha_inicio_recibio_radioterapia: {
            type: String,
            require: true,
        },
        fecha_termino_recibio_radioterapia: {
            type: String,
            require: true,
        },
        recibio_hormonoterapia: {
            type: String,
            require: true,
        },
        fecha_inicio_recibio_hormonoterapia: {
            type: String,
            require: true,
        },
        fecha_termino_recibio_hormonoterapia: {
            type: String,
            require: true,
        },
        recibio_quimioterapia: {
            type: String,
            require: true,
        },
        fecha_inicio_recibio_quimioterapia: {
            type: String,
            require: true,
        },
        fecha_termino_recibio_quimioterapia: {
            type: String,
            require: true,
        },
        detallar_medicacion_paciente_toma_recibe: {
            type: String,
            require: true,
        },
        detallar_medicacion_paciente_toma_recibe_otros: {
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

const Formulario6 = model("Formulario6", formulario6Schema);
export default Formulario6;