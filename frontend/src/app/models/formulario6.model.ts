export class Formulario6 {
    _id?: number;
    iniciales_paciente: string;
    numero_hc: string;
    centro_institucion_atencion: string;

    cirugia: string;
    tipo_cirugia: string;
    fecha_procedimiento: string;
    recibio_radioterapia: string;
    fecha_inicio_recibio_radioterapia: string;
    fecha_termino_recibio_radioterapia: string;

    recibio_hormonoterapia: string;
    fecha_inicio_recibio_hormonoterapia: string;
    fecha_termino_recibio_hormonoterapia: string;
    
    recibio_quimioterapia: string;
    fecha_inicio_recibio_quimioterapia: string;
    fecha_termino_recibio_quimioterapia: string;
    detallar_medicacion_paciente_toma_recibe: string;
    // detallar_medicacion_paciente_toma_recibe_aines: string;
    // detallar_medicacion_paciente_toma_recibe_corticoides: string;
    detallar_medicacion_paciente_toma_recibe_otros: string;

    nombre: string;
    fecha: string;
    firma: string;
  
    constructor(
        iniciales_paciente: string,
        numero_hc: string,
        centro_institucion_atencion: string,
     
        cirugia: string,
        tipo_cirugia: string,
        fecha_procedimiento: string,
        recibio_radioterapia: string,
        fecha_inicio_recibio_radioterapia: string,
        fecha_termino_recibio_radioterapia: string,
    
        recibio_hormonoterapia: string,
        fecha_inicio_recibio_hormonoterapia: string,
        fecha_termino_recibio_hormonoterapia: string,
        
        recibio_quimioterapia: string,
        fecha_inicio_recibio_quimioterapia: string,
        fecha_termino_recibio_quimioterapia: string,
        detallar_medicacion_paciente_toma_recibe: string,
        // detallar_medicacion_paciente_toma_recibe_aines: string,
        // detallar_medicacion_paciente_toma_recibe_corticoides: string,
        detallar_medicacion_paciente_toma_recibe_otros: string,
    
        nombre: string,
        fecha: string,
        firma: string,

    ) {
        this.iniciales_paciente = iniciales_paciente;
        this.numero_hc = numero_hc;
        this.centro_institucion_atencion = centro_institucion_atencion;

        this.cirugia = cirugia;
        this.tipo_cirugia = tipo_cirugia;
        this.fecha_procedimiento = fecha_procedimiento;
        this.recibio_radioterapia = recibio_radioterapia;
        this.fecha_inicio_recibio_radioterapia = fecha_inicio_recibio_radioterapia;
        this.fecha_termino_recibio_radioterapia = fecha_termino_recibio_radioterapia;
    
        this.recibio_hormonoterapia = recibio_hormonoterapia;
        this.fecha_inicio_recibio_hormonoterapia = fecha_inicio_recibio_hormonoterapia;
        this.fecha_termino_recibio_hormonoterapia = fecha_termino_recibio_hormonoterapia;
        
        this.recibio_quimioterapia = recibio_quimioterapia;
        this.fecha_inicio_recibio_quimioterapia = fecha_inicio_recibio_quimioterapia;
        this.fecha_termino_recibio_quimioterapia = fecha_termino_recibio_quimioterapia;
        this.detallar_medicacion_paciente_toma_recibe = detallar_medicacion_paciente_toma_recibe;
        // this.detallar_medicacion_paciente_toma_recibe_aines = detallar_medicacion_paciente_toma_recibe_aines;
        // this.detallar_medicacion_paciente_toma_recibe_corticoides = detallar_medicacion_paciente_toma_recibe_corticoides;
        this.detallar_medicacion_paciente_toma_recibe_otros = detallar_medicacion_paciente_toma_recibe_otros;

        this.nombre = nombre;
        this.fecha = fecha;
        this.firma = firma;
    }
  }