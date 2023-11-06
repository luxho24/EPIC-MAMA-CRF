export class Formulario2 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    signos_sintomas_inicio: string;
    fecha_inicio_sintomas_signos: string;
    tiempo_meses_diagnostico: string;
    tamano_tumor_campo1: string;
    tamano_tumor_campo2: string;
    ganglios_axilares: string;
    tipo_histologico: string;
    conclusion_informe: string;
    clasificacion_molecular: string;
    
    nombre: string;
    fecha: string;
    firma: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,

        signos_sintomas_inicio: string,
        fecha_inicio_sintomas_signos: string,
        tiempo_meses_diagnostico: string,
        tamano_tumor_campo1: string,
        tamano_tumor_campo2: string,
        ganglios_axilares: string,
        tipo_histologico: string,
        conclusion_informe: string,
        clasificacion_molecular: string,
        
        nombre: string,
        fecha: string,
        firma: string,
    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.signos_sintomas_inicio = signos_sintomas_inicio;
        this.fecha_inicio_sintomas_signos = fecha_inicio_sintomas_signos;
        this.tiempo_meses_diagnostico = tiempo_meses_diagnostico;
        this.tamano_tumor_campo1 = tamano_tumor_campo1;
        this.tamano_tumor_campo2 = tamano_tumor_campo2;
        this.ganglios_axilares = ganglios_axilares;
        this.tipo_histologico = tipo_histologico;
        this.conclusion_informe = conclusion_informe;
        this.clasificacion_molecular = clasificacion_molecular;
        
        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }