import { Schema, model } from "mongoose";

const pacienteSchema = new Schema (
    {
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
        tipo_documento: {
            type: String,
            require: true,
            default: "-",
        },
        numero_documento: {
            type: String,
            require: true,
            default: "-",
        },
        celular: {
            type: String,
            require: true,
            default: "-",
        },
        email: {
            type: String,
            require: true,
            default: "-",
        },
        fecha_nacimiento: {
            type: String,
            require: true,
            default: "-",
        },
        edad_paciente: {
            type: String,
            require: true,
            default: "-",
        },
        ciudad_reside: {
            type: String,
            require: true,
            default: "-",
        },
        centro_institucion_atencion: {
            type: String,
            require: true,
            default: "-",
        },
        estado_civil: {
            type: String,
            require: true,
            default: "-",
        },
        tipo_parto_nacer: {
            type: String,
            require: true,
            default: "-",
        },
        numero_hijos: {
            type: String,
            require: true,
            default: "-",
        },
        numero_gestaciones_embarazos: {
            type: String,
            require: true,
            default: "-",
        },
        lactancia: {
            type: String,
            require: true,
            default: "-",
        },
        tiempo_lactancia: {
            type: String,
            require: true,
            default: "-",
        },
        uso_anticonceptivos: {
            type: String,
            require: true,
            default: "-",
        },
        tiempo_uso_anticonceptivos: {
            type: String,
            require: true,
            default: "-",
        },
        antecedente_familiar_cancer: {
            type: String,
            require: true,
            default: "-",
        },
        antecedente_familiar_cancer_mama: {
            type: String,
            require: true,
            default: "-",
        },
        trabaja: {
            type: String,
            require: true,
            default: "-",
        },
        ocupacion: {
            type: String,
            require: true,
            default: "-",
        },
        nivel_educativo: {
            type: String,
            require: true,
            default: "-",
        },
        raza_grupo_etnico: {
            type: String,
            require: true,
            default: "-",
        },
        peso: {
            type: String,
            require: true,
            default: "-",
        },
        talla: {
            type: String,
            require: true,
            default: "-",
        },
        cintura_abdominal: {
            type: String,
            require: true,
            default: "-",
        },
        frecuencia_cardiaca: {
            type: String,
            require: true,
            default: "-",
        },
        frecuencia_respiratoria: {
            type: String,
            require: true,
            default: "-",
        },
        signos_vitales_presion_arterial: {
            type: String,
            require: true,
            default: "-",
        },
        temperatura: {
            type: String,
            require: true,
            default: "-",
        },
        antecedentes_patologias_cronicas: {
            type: String,
            require: true,
            default: "-",
        },
        habito_fumar: {
            type: String,
            require: true,
            default: "-",
        },
        cigarrillos_por_dia: {
            type: String,
            require: true,
            default: "-",
        },
        tiempo_fumar: {
            type: String,
            require: true,
            default: "-",
        },
        horas_sueno_por_dia: {
            type: String,
            require: true,
            default: "-",
        },
        obesidad_abdominal: {
            type: String,
            require: true,
            default: "-",
        },
        trigliceridos: {
            type: String,
            require: true,
            default: "-",
        },
        colesterol: {
            type: String,
            require: true,
            default: "-",
        },
        sindrome_metabolico_presion_arterial: {
            type: String,
            require: true,
            default: "-",
        },
        glucosa: {
            type: String,
            require: true,
            default: "-",
        },
        medicamento_1: {
            type: String,
            require: true,
            default: "-",
        },
        medicamento_2: {
            type: String,
            require: true,
            default: "-",
        },
        medicamento_3: {
            type: String,
            require: true,
            default: "-",
        },
        medicamento_4: {
            type: String,
            require: true,
            default: "-",
        },
        uso_antibioticos_ultimos_meses: {
            type: String,
            require: true,
            default: "-",
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