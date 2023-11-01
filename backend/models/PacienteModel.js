import { Schema, model } from "mongoose";

const pacienteSchema = new Schema (
    {
        iniciales_paciente: {
            type: String,
            require: true,
        },
        numero_hc: {
            type: String,
            require: true,
        },
        tipo_documento: {
            type: String,
            require: true,
        },
        numero_documento: {
            type: String,
            require: true,
        },
        celular: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        fecha_nacimiento: {
            type: String,
            require: true,
        },
        edad_paciente: {
            type: String,
            require: true,
        },
        ciudad_reside: {
            type: String,
            require: true,
        },
        centro_institucion_atencion: {
            type: String,
            require: true,
        },
        estado_civil: {
            type: String,
            require: true,
        },
        tipo_parto_nacer: {
            type: String,
            require: true,
        },
        numero_hijos: {
            type: String,
            require: true,
        },
        numero_gestaciones_embarazos: {
            type: String,
            require: true,
        },
        lactancia: {
            type: String,
            require: true,
        },
        tiempo_lactancia: {
            type: String,
            require: true,
        },
        uso_anticonceptivos: {
            type: String,
            require: true,
        },
        tiempo_uso_anticonceptivos: {
            type: String,
            require: true,
        },
        antecedente_familiar_cancer: {
            type: String,
            require: true,
        },
        antecedente_familiar_cancer_mama: {
            type: String,
            require: true,
        },
        trabaja: {
            type: String,
            require: true,
        },
        ocupacion: {
            type: String,
            require: true,
        },
        nivel_educativo: {
            type: String,
            require: true,
        },
        raza_grupo_etnico: {
            type: String,
            require: true,
        },
        peso: {
            type: String,
            require: true,
        },
        talla: {
            type: String,
            require: true,
        },
        cintura_abdominal: {
            type: String,
            require: true,
        },
        frecuencia_cardiaca: {
            type: String,
            require: true,
        },
        frecuencia_respiratoria: {
            type: String,
            require: true,
        },
        signos_vitales_presion_arterial: {
            type: String,
            require: true,
        },
        temperatura: {
            type: String,
            require: true,
        },
        antecedentes_patologias_cronicas: {
            type: String,
            require: true,
        },
        habito_fumar: {
            type: String,
            require: true,
        },
        cigarrillos_por_dia: {
            type: String,
            require: true,
        },
        tiempo_fumar: {
            type: String,
            require: true,
        },
        horas_sueno_por_dia: {
            type: String,
            require: true,
        },
        obesidad_abdominal: {
            type: String,
            require: true,
        },
        trigliceridos: {
            type: String,
            require: true,
        },
        colesterol: {
            type: String,
            require: true,
        },
        sindrome_metabolico_presion_arterial: {
            type: String,
            require: true,
        },
        glucosa: {
            type: String,
            require: true,
        },
        medicamento_1: {
            type: String,
            require: true,
        },
        medicamento_2: {
            type: String,
            require: true,
        },
        medicamento_3: {
            type: String,
            require: true,
        },
        medicamento_4: {
            type: String,
            require: true,
        },
        uso_antibioticos_ultimos_meses: {
            type: String,
            require: true,
        },
        antibioticos: {
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
    }
)

const Paciente = model("Paciente", pacienteSchema);
export default Paciente;