export class Formulario5 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    fecha_hemograma_basal: string;
    resultados_hemograma: string;
    fecha_otros_estudios_laboratorio: string;
    resultados_otros_estudios: string;
    fecha_muestra_marcadores_inflamatorios_pretratamiento: string;
    codigo_muestra_marcadores_inflamatorios_pretratamiento: string;
    
    tumor: string;
    nodulo: string;
    metastasis: string;

    estadificacion_paciente: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,

        fecha_hemograma_basal: string,
        resultados_hemograma: string,
        fecha_otros_estudios_laboratorio: string,
        resultados_otros_estudios: string,
        fecha_muestra_marcadores_inflamatorios_pretratamiento: string,
        codigo_muestra_marcadores_inflamatorios_pretratamiento: string,
        
        tumor: string,
        nodulo: string,
        metastasis: string,

        estadificacion_paciente: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.fecha_hemograma_basal = fecha_hemograma_basal;
        this.resultados_hemograma = resultados_hemograma;
        this.fecha_otros_estudios_laboratorio = fecha_otros_estudios_laboratorio;
        this.resultados_otros_estudios = resultados_otros_estudios;
        this.fecha_muestra_marcadores_inflamatorios_pretratamiento = fecha_muestra_marcadores_inflamatorios_pretratamiento;
        this.codigo_muestra_marcadores_inflamatorios_pretratamiento = codigo_muestra_marcadores_inflamatorios_pretratamiento;
        
        this.tumor = tumor;
        this.nodulo = nodulo;
        this.metastasis = metastasis;

        this.estadificacion_paciente = estadificacion_paciente;
    }
  }