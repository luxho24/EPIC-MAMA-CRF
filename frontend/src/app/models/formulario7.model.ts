export class Formulario7 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    resultados_hemograma: string;
    fecha_hemograma: string;
    resultados_otros_estudios: string;
    fecha_otros_estudios: string;
    fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos: string;
    codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos: string;

    fecha_muestra_tumor: string;
    fecha_microbioma_intestinal: string;
    fecha_microbioma_salival: string;
    
    ecografia: string;
    mamografia: string;
    gamagrafia_osea: string;
    tomografia: string;
    rmn: string;
    pet: string;

    tumor: string;
    nodulo: string;
    metastasis: string;

    estadificacion_paciente: string;

    nombre: string;
    fecha: string;
    firma: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,
    
        resultados_hemograma: string,
        fecha_hemograma: string,
        resultados_otros_estudios: string,
        fecha_otros_estudios: string,
        fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos: string,
        codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos: string,
    
        fecha_muestra_tumor: string,
        fecha_microbioma_intestinal: string,
        fecha_microbioma_salival: string,
        
        ecografia: string,
        mamografia: string,
        gamagrafia_osea: string,
        tomografia: string,
        rmn: string,
        pet: string,
    
        tumor: string,
        nodulo: string,
        metastasis: string,
    
        estadificacion_paciente: string,
    
        nombre: string,
        fecha: string,
        firma: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.resultados_hemograma = resultados_hemograma;
        this.fecha_hemograma = fecha_hemograma;
        this.resultados_otros_estudios = resultados_otros_estudios;
        this.fecha_otros_estudios = fecha_otros_estudios;
        this.fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos = fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos;
        this.codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos = codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos;

        this.fecha_muestra_tumor = fecha_muestra_tumor;
        this.fecha_microbioma_intestinal = fecha_microbioma_intestinal;
        this.fecha_microbioma_salival = fecha_microbioma_salival;
        
        this.ecografia = ecografia;
        this.mamografia = mamografia;
        this.gamagrafia_osea = gamagrafia_osea;
        this.tomografia = tomografia;
        this.rmn = rmn;
        this.pet = pet;

        this.tumor = tumor;
        this.nodulo = nodulo;
        this.metastasis = metastasis;

        this.estadificacion_paciente = estadificacion_paciente;

        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }