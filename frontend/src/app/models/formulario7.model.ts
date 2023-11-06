export class Formulario7 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    esquema_tratamiento: string;
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
    
        esquema_tratamiento: string,
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

        this.esquema_tratamiento = esquema_tratamiento;
        this.fecha_tratamiento = fecha_tratamiento;
        this.ciclo = ciclo;
        this.tolerancia = tolerancia;
        this.evaluacion_respuesta_tratamiento = evaluacion_respuesta_tratamiento;
        
        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }