import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  datos = <Paciente>{};
  tipo_documento = [
    {tipo: "DNI"},
    {tipo: "Carnet de extranjería"},
    {tipo: "Otros (Pasaporte)"}
  ]
  ciudad_reside = [
    {ciudad: "LIMA"},
    {ciudad: "AREQUIPA"},
    {ciudad: "TRUJILLO"},
    {ciudad: "OTRO"}
  ]
  centro_institucion_atencion = [
    {institucion: "INEN LIMA"},
    {institucion: "INEN AREQUIPA"},
    {institucion: "INEN TRUJILLO"}
  ]
  estado_civil = [
    {estado: "CASADA"},
    {estado: "CONVIVIENTE"},
    {estado: "SOLTERA"},
    {estado: "SEPARADA"},
    {estado: "VIUDA"},
    {estado: "DIVORCIADA"}
  ]
  nivel_educativo = [
    {nivel: "ANALFABETO"},
    {nivel: "PRIMARIA"},
    {nivel: "SECUNDARIA"},
    {nivel: "SUPERIOR TÉCNICA"},
    {nivel: "SUPERIOR UNIIVERSITARIA"}
  ]
  raza_grupo_etnico = [
    {raza: "AYMARA"},
    {raza: "BLANCO"},
    {raza: "MESTIZO"},
    {raza: "NATIVO O INDÍGENA DE LA AMAZONÍA"},
    {raza: "NEGRO/MORENO/ZAMBO/MULATO/AFROPERUANO"},
    {raza: "QUECHUA"},
    {raza: "PRETENECIENTE O PARTE DE OTRO PUEBLO INDÍGENA U ORIGINARIO"}
  ]

  constructor(private _pacienteService: PacienteService, private router: Router){}

  ngOnInit(): void {
    
  }

  selectedFile: File | null = null;

onSelectFile(e: any) {
  const files: FileList = e.target.files;
  if (files && files.length > 0) {
    this.selectedFile = files[0];
  }
}

  // Funcion para registrar pacientes en el formulario 1
  registrarForm1() {
  // Verifica si se seleccionó una imagen
  if (this.selectedFile) {
    // Ahora puedes continuar con el proceso de registro y adjuntar la imagen
    const formData = new FormData();
    formData.append('imagen', this.selectedFile);

    // Añade otros datos del formulario a formData, por ejemplo:
    formData.append('iniciales_paciente', this.datos.iniciales_paciente);
        formData.append('numero_hc', this.datos.numero_hc);
        formData.append('tipo_documento', this.datos.tipo_documento);
        formData.append('numero_documento', this.datos.numero_documento);
        formData.append('celular', this.datos.celular);
        formData.append('email', this.datos.email);
        formData.append('fecha_nacimiento', this.datos.fecha_nacimiento);
        formData.append('edad_paciente', this.datos.edad_paciente);
        formData.append('ciudad_reside', this.datos.ciudad_reside);
        formData.append('centro_institucion_atencion', this.datos.centro_institucion_atencion);
        formData.append('estado_civil', this.datos.estado_civil);
        formData.append('tipo_parto_nacer', this.datos.tipo_parto_nacer);
        formData.append('numero_hijos', this.datos.numero_hijos);
        formData.append('numero_gestaciones_embarazos', this.datos.numero_gestaciones_embarazos);
        formData.append('lactancia', this.datos.lactancia);
        formData.append('tiempo_lactancia', this.datos.tiempo_lactancia);
        formData.append('uso_anticonceptivos', this.datos.uso_anticonceptivos);
        formData.append('tiempo_uso_anticonceptivos', this.datos.tiempo_uso_anticonceptivos);
        formData.append('antecedente_familiar_cancer', this.datos.antecedente_familiar_cancer);
        formData.append('antecedente_familiar_cancer_mama', this.datos.antecedente_familiar_cancer_mama);
        formData.append('trabaja', this.datos.trabaja);
        formData.append('ocupacion', this.datos.ocupacion);
        formData.append('nivel_educativo', this.datos.nivel_educativo);
        formData.append('raza_grupo_etnico', this.datos.raza_grupo_etnico);

        formData.append('peso', this.datos.peso);
        formData.append('talla', this.datos.talla);
        formData.append('cintura_abdominal', this.datos.cintura_abdominal);

        formData.append('frecuencia_cardiaca', this.datos.frecuencia_cardiaca);
        formData.append('frecuencia_respiratoria', this.datos.frecuencia_respiratoria);
        formData.append('signos_vitales_presion_arterial', this.datos.signos_vitales_presion_arterial);
        formData.append('temperatura', this.datos.temperatura);

        formData.append('antecedentes_patologias_cronicas', this.datos.antecedentes_patologias_cronicas);
        formData.append('habito_fumar', this.datos.habito_fumar);
        formData.append('cigarrillos_por_dia', this.datos.cigarrillos_por_dia);
        formData.append('tiempo_fumar', this.datos.tiempo_fumar);
        formData.append('horas_sueno_por_dia', this.datos.horas_sueno_por_dia);

        formData.append('obesidad_abdominal', this.datos.obesidad_abdominal);
        formData.append('trigliceridos', this.datos.trigliceridos);
        formData.append('colesterol', this.datos.colesterol);
        formData.append('sindrome_metabolico_presion_arterial', this.datos.sindrome_metabolico_presion_arterial);
        formData.append('glucosa', this.datos.glucosa);

        formData.append('medicamento_1', this.datos.medicamento_1);
        formData.append('medicamento_2', this.datos.medicamento_2);
        formData.append('medicamento_3', this.datos.medicamento_3);
        formData.append('medicamento_4', this.datos.medicamento_4);
        formData.append('uso_antibioticos_ultimos_meses', this.datos.uso_antibioticos_ultimos_meses);
        formData.append('antibioticos', this.datos.antibioticos);

        formData.append('nombre', this.datos.nombre);
        formData.append('fecha', this.datos.fecha);

    // Llama a la función de registro en tu servicio con el formData
    this._pacienteService.registerForm1(formData).subscribe(
      (res) => {
        console.log(res);
        this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
          (result) => {
            console.log(result.idUsuario);
            console.log(result.idPaciente);
            this.router.navigate(['/formulario2/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  } else {
    console.log("error");
    // Muestra un mensaje de error o realiza alguna acción si no se seleccionó una imagen.
  }
  }

  /*
  registrarForm1() {
    const formData = new FormData();
        // Agregar los campos del formulario
        formData.append('iniciales_paciente', this.datos.iniciales_paciente);
        formData.append('numero_hc', this.datos.numero_hc);
        formData.append('tipo_documento', this.datos.tipo_documento);
        formData.append('numero_documento', this.datos.numero_documento);
        formData.append('celular', this.datos.celular);
        formData.append('email', this.datos.email);
        formData.append('fecha_nacimiento', this.datos.fecha_nacimiento);
        formData.append('edad_paciente', this.datos.edad_paciente);
        formData.append('ciudad_reside', this.datos.ciudad_reside);
        formData.append('centro_institucion_atencion', this.datos.centro_institucion_atencion);
        formData.append('estado_civil', this.datos.estado_civil);
        formData.append('tipo_parto_nacer', this.datos.tipo_parto_nacer);
        formData.append('numero_hijos', this.datos.numero_hijos);
        formData.append('numero_gestaciones_embarazos', this.datos.numero_gestaciones_embarazos);
        formData.append('lactancia', this.datos.lactancia);
        formData.append('tiempo_lactancia', this.datos.tiempo_lactancia);
        formData.append('uso_anticonceptivos', this.datos.uso_anticonceptivos);
        formData.append('tiempo_uso_anticonceptivos', this.datos.tiempo_uso_anticonceptivos);
        formData.append('antecedente_familiar_cancer', this.datos.antecedente_familiar_cancer);
        formData.append('antecedente_familiar_cancer_mama', this.datos.antecedente_familiar_cancer_mama);
        formData.append('trabaja', this.datos.trabaja);
        formData.append('ocupacion', this.datos.ocupacion);
        formData.append('nivel_educativo', this.datos.nivel_educativo);
        formData.append('raza_grupo_etnico', this.datos.raza_grupo_etnico);

        formData.append('peso', this.datos.peso);
        formData.append('talla', this.datos.talla);
        formData.append('cintura_abdominal', this.datos.cintura_abdominal);

        formData.append('frecuencia_cardiaca', this.datos.frecuencia_cardiaca);
        formData.append('frecuencia_respiratoria', this.datos.frecuencia_respiratoria);
        formData.append('signos_vitales_presion_arterial', this.datos.signos_vitales_presion_arterial);
        formData.append('temperatura', this.datos.temperatura);

        formData.append('antecedentes_patologias_cronicas', this.datos.antecedentes_patologias_cronicas);
        formData.append('habito_fumar', this.datos.habito_fumar);
        formData.append('cigarrillos_por_dia', this.datos.cigarrillos_por_dia);
        formData.append('tiempo_fumar', this.datos.tiempo_fumar);
        formData.append('horas_sueno_por_dia', this.datos.horas_sueno_por_dia);

        formData.append('obesidad_abdominal', this.datos.obesidad_abdominal);
        formData.append('trigliceridos', this.datos.trigliceridos);
        formData.append('colesterol', this.datos.colesterol);
        formData.append('sindrome_metabolico_presion_arterial', this.datos.sindrome_metabolico_presion_arterial);
        formData.append('glucosa', this.datos.glucosa);

        formData.append('medicamento_1', this.datos.medicamento_1);
        formData.append('medicamento_2', this.datos.medicamento_2);
        formData.append('medicamento_3', this.datos.medicamento_3);
        formData.append('medicamento_4', this.datos.medicamento_4);
        formData.append('uso_antibioticos_ultimos_meses', this.datos.uso_antibioticos_ultimos_meses);
        formData.append('antibioticos', this.datos.antibioticos);

        formData.append('nombre', this.datos.nombre);
        formData.append('fecha', this.datos.fecha);
        // formData.append('firma', this.datos.firma);

        // Agregar otros campos del formulario
    
        // Agregar la imagen solo si se seleccionó una
        if (this.datos.firma) {
          formData.append('firma', this.datos.firma);
        }
    this._pacienteService.registerForm1(formData).subscribe(
      (res) => {
        console.log(res);
        this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
          (result) => {
            console.log(result.idUsuario);
            console.log(result.idPaciente);
            this.router.navigate(['/formulario2/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
          },
          (err) => {
            console.log(err);
          }
        )
        // return this.router.navigate(['/formulario2']);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  url="../../../../../assets/img/not-image.jpg";
  selectedFile: File | null = null;
  onSelectFile(e: any) {
    const files: FileList = e.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      console.log(this.selectedFile);

      if (e.target.files) {
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (event: any) => {
              this.url = event.target.result;
          }
      }
    }
  }
  */
}
