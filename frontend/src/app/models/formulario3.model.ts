export class Formulario3 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    cuenta_consentimiento_informado: string;
    fecha_consentimiento_informado: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,

        cuenta_consentimiento_informado: string,
        fecha_consentimiento_informado: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.cuenta_consentimiento_informado = cuenta_consentimiento_informado;
        this.fecha_consentimiento_informado = fecha_consentimiento_informado;
    }
  }