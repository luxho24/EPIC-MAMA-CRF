export class Formulario4 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    criterios_inclusion_1: string;
    criterios_inclusion_2: string;
    criterios_inclusion_3: string;
    criterios_inclusion_4: string;
    criterios_inclusion_5: string;
    criterios_inclusion_6: string;
    criterios_inclusion_7: string;

    criterios_exclusion_1: string;
    criterios_exclusion_2: string;
    criterios_exclusion_3: string;
    criterios_exclusion_4: string;
    criterios_exclusion_5: string;
    criterios_exclusion_6: string;
    
    criterios_elegibilidad_estudio: string;

    nombre: string;
    fecha: string;
    firma: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,

        criterios_inclusion_1: string,
        criterios_inclusion_2: string,
        criterios_inclusion_3: string,
        criterios_inclusion_4: string,
        criterios_inclusion_5: string,
        criterios_inclusion_6: string,
        criterios_inclusion_7: string,
    
        criterios_exclusion_1: string,
        criterios_exclusion_2: string,
        criterios_exclusion_3: string,
        criterios_exclusion_4: string,
        criterios_exclusion_5: string,
        criterios_exclusion_6: string,
        
        criterios_elegibilidad_estudio: string,
        
        nombre: string,
        fecha: string,
        firma: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.criterios_inclusion_1 = criterios_inclusion_1;
        this.criterios_inclusion_2 = criterios_inclusion_2;
        this.criterios_inclusion_3 = criterios_inclusion_3;
        this.criterios_inclusion_4 = criterios_inclusion_4;
        this.criterios_inclusion_5 = criterios_inclusion_5;
        this.criterios_inclusion_6 = criterios_inclusion_6;
        this.criterios_inclusion_7 = criterios_inclusion_7;
    
        this.criterios_exclusion_1 = criterios_exclusion_1;
        this.criterios_exclusion_2 = criterios_exclusion_2;
        this.criterios_exclusion_3 = criterios_exclusion_3;
        this.criterios_exclusion_4 = criterios_exclusion_4;
        this.criterios_exclusion_5 = criterios_exclusion_5;
        this.criterios_exclusion_6 = criterios_exclusion_6;
        
        this.criterios_elegibilidad_estudio = criterios_elegibilidad_estudio;
        
        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }