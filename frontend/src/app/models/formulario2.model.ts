export class Formulario2 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    tipo_documento: string;
    numero_documento: string;
    celular: string;
    email: string;
    fecha_nacimiento: string;
    edad_paciente: string;
    ciudad_reside: string;
    centro_institucion_atencion: string;
    estado_civil: string;
    tipo_parto_nacer: string;
    numero_hijos: string;
    numero_gestaciones_embarazos: string;
    lactancia: string;
    tiempo_lactancia: string;
    uso_anticonceptivos: string;
    tiempo_uso_anticonceptivos: string;
    antecedente_familiar_cancer: string;
    antecedente_familiar_cancer_mama: string;
    trabaja: string;
    ocupacion: string;
    nivel_educativo: string;
    raza_grupo_etnico: string;
    
    peso: string;
    talla: string;
    cintura_abdominal: string;

    frecuencia_cardiaca: string;
    frecuencia_respiratoria: string;
    signos_vitales_presion_arterial: string;
    temperatura: string;
    
    antecedentes_patologias_cronicas: string;
    habito_fumar: string;
    cigarrillos_por_dia: string;
    tiempo_fumar: string;
    horas_sueno_por_dia: string;
    
    obesidad_abdominal: string;
    trigliceridos: string;
    colesterol: string;
    sindrome_metabolico_presion_arterial: string;
    glucosa: string;

    medicamento_1: string;
    medicamento_2: string;
    medicamento_3: string;
    medicamento_4: string;
    uso_antibioticos_ultimos_meses: string;
    antibioticos: string;
    
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        tipo_documento: string,
        numero_documento: string,
        celular: string,
        email: string,
        fecha_nacimiento: string,
        edad_paciente: string,
        ciudad_reside: string,
        centro_institucion_atencion: string,
        estado_civil: string,
        tipo_parto_nacer: string,
        numero_hijos: string,
        numero_gestaciones_embarazos: string,
        lactancia: string,
        tiempo_lactancia: string,
        uso_anticonceptivos: string,
        tiempo_uso_anticonceptivos: string,
        antecedente_familiar_cancer: string,
        antecedente_familiar_cancer_mama: string,
        trabaja: string,
        ocupacion: string,
        nivel_educativo: string,
        raza_grupo_etnico: string,

        peso: string,
        talla: string,
        cintura_abdominal: string,

        frecuencia_cardiaca: string,
        frecuencia_respiratoria: string,
        signos_vitales_presion_arterial: string,
        temperatura: string,
        
        antecedentes_patologias_cronicas: string,
        habito_fumar: string,
        cigarrillos_por_dia: string,
        tiempo_fumar: string,
        horas_sueno_por_dia: string,
        
        obesidad_abdominal: string,
        trigliceridos: string,
        colesterol: string,
        sindrome_metabolico_presion_arterial: string,
        glucosa: string,

        medicamento_1: string,
        medicamento_2: string,
        medicamento_3: string,
        medicamento_4: string,
        uso_antibioticos_ultimos_meses: string,
        antibioticos: string,
    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.celular = celular;
        this.email = email;
        this.fecha_nacimiento = fecha_nacimiento;
        this.edad_paciente = edad_paciente;
        this.ciudad_reside = ciudad_reside;
        this.centro_institucion_atencion = centro_institucion_atencion;
        this.estado_civil = estado_civil;
        this.tipo_parto_nacer = tipo_parto_nacer;
        this.numero_hijos = numero_hijos;
        this.numero_gestaciones_embarazos = numero_gestaciones_embarazos;
        this.lactancia = lactancia;
        this.tiempo_lactancia = tiempo_lactancia;
        this.uso_anticonceptivos = uso_anticonceptivos;
        this.tiempo_uso_anticonceptivos = tiempo_uso_anticonceptivos;
        this.antecedente_familiar_cancer = antecedente_familiar_cancer;
        this.antecedente_familiar_cancer_mama = antecedente_familiar_cancer_mama;
        this.trabaja = trabaja;
        this.ocupacion = ocupacion;
        this.nivel_educativo = nivel_educativo;
        this.raza_grupo_etnico = raza_grupo_etnico;
        
        this.peso = peso;
        this.talla = talla;
        this.cintura_abdominal = cintura_abdominal;

        this.frecuencia_cardiaca = frecuencia_cardiaca;
        this.frecuencia_respiratoria = frecuencia_respiratoria;
        this.signos_vitales_presion_arterial = signos_vitales_presion_arterial;
        this.temperatura = temperatura;
        
        this.antecedentes_patologias_cronicas = antecedentes_patologias_cronicas;
        this.habito_fumar = habito_fumar;
        this.cigarrillos_por_dia = cigarrillos_por_dia;
        this.tiempo_fumar = tiempo_fumar;
        this.horas_sueno_por_dia = horas_sueno_por_dia;
        
        this.obesidad_abdominal = obesidad_abdominal;
        this.trigliceridos = trigliceridos;
        this.colesterol = colesterol;
        this.sindrome_metabolico_presion_arterial = sindrome_metabolico_presion_arterial;
        this.glucosa = glucosa;

        this.medicamento_1 = medicamento_1;
        this.medicamento_2 = medicamento_2;
        this.medicamento_3 = medicamento_3;
        this.medicamento_4 = medicamento_4;
        this.uso_antibioticos_ultimos_meses = uso_antibioticos_ultimos_meses;
        this.antibioticos = antibioticos;
    }
  }