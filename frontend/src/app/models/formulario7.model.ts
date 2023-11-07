export class Formulario7 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    tratamiento_medicamento_1: string;
    tratamiento_dosis_1: string;
    tratamiento_medicamento_2: string;
    tratamiento_dosis_2: string;
    tratamiento_medicamento_3: string;
    tratamiento_dosis_3: string;
    tratamiento_medicamento_4: string;
    tratamiento_dosis_4: string;
    tratamiento_medicamento_5: string;
    tratamiento_dosis_5: string;
    tratamiento_medicamento_6: string;
    tratamiento_dosis_6: string;
    tratamiento_medicamento_7: string;
    tratamiento_dosis_7: string;
    tratamiento_medicamento_8: string;
    tratamiento_dosis_8: string;
    tratamiento_medicamento_9: string;
    tratamiento_dosis_9: string;
    tratamiento_medicamento_10: string;
    tratamiento_dosis_10: string;

    fecha_tratamiento: string;
    ciclo: string;
    tolerancia: string;
    evaluacion_respuesta_tratamiento: string;

    nombre: string;
    fecha: string;
    firma: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,
    
        tratamiento_medicamento_1: string,
        tratamiento_dosis_1: string,
        tratamiento_medicamento_2: string,
        tratamiento_dosis_2: string,
        tratamiento_medicamento_3: string,
        tratamiento_dosis_3: string,
        tratamiento_medicamento_4: string,
        tratamiento_dosis_4: string,
        tratamiento_medicamento_5: string,
        tratamiento_dosis_5: string,
        tratamiento_medicamento_6: string,
        tratamiento_dosis_6: string,
        tratamiento_medicamento_7: string,
        tratamiento_dosis_7: string,
        tratamiento_medicamento_8: string,
        tratamiento_dosis_8: string,
        tratamiento_medicamento_9: string,
        tratamiento_dosis_9: string,
        tratamiento_medicamento_10: string,
        tratamiento_dosis_10: string,

        fecha_tratamiento: string,
        ciclo: string,
        tolerancia: string,
        evaluacion_respuesta_tratamiento: string,

        nombre: string,
        fecha: string,
        firma: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.tratamiento_medicamento_1 = tratamiento_medicamento_1;
        this.tratamiento_dosis_1 = tratamiento_dosis_1;
        this.tratamiento_medicamento_2 = tratamiento_medicamento_2;
        this.tratamiento_dosis_2 = tratamiento_dosis_2;
        this.tratamiento_medicamento_3 = tratamiento_medicamento_3;
        this.tratamiento_dosis_3 = tratamiento_dosis_3;
        this.tratamiento_medicamento_4 = tratamiento_medicamento_4;
        this.tratamiento_dosis_4 = tratamiento_dosis_4;
        this.tratamiento_medicamento_5 = tratamiento_medicamento_5;
        this.tratamiento_dosis_5 = tratamiento_dosis_5;
        this.tratamiento_medicamento_6 = tratamiento_medicamento_6;
        this.tratamiento_dosis_6 = tratamiento_dosis_6;
        this.tratamiento_medicamento_7 = tratamiento_medicamento_7;
        this.tratamiento_dosis_7 = tratamiento_dosis_7;
        this.tratamiento_medicamento_8 = tratamiento_medicamento_8;
        this.tratamiento_dosis_8 = tratamiento_dosis_8;
        this.tratamiento_medicamento_9 = tratamiento_medicamento_9;
        this.tratamiento_dosis_9 = tratamiento_dosis_9;
        this.tratamiento_medicamento_10 = tratamiento_medicamento_10;
        this.tratamiento_dosis_10 = tratamiento_dosis_10;
        
        this.fecha_tratamiento = fecha_tratamiento;
        this.ciclo = ciclo;
        this.tolerancia = tolerancia;
        this.evaluacion_respuesta_tratamiento = evaluacion_respuesta_tratamiento;
        
        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }