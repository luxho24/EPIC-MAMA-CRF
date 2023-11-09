import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

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

  idUsuario!: any;
  idPaciente!: any;

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute, private toastr: ToastrService){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');
    this.mostrarDatosPacienteSA();
    this.mostrarDatos();
  }

  // Funcion para autocompletar los campos segun el id del paciente en la url
  mostrarDatos() {
    if (this.idPaciente !== null) {
      this._pacienteService.obtenerPacientePorId(this.idUsuario, this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          // this.datos.cuenta_consentimiento_informado = res.paciente.cuenta_consentimiento_informado;
          // this.datos.fecha_consentimiento_informado = res.paciente.fecha_consentimiento_informado;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  mostrarDatosPacienteSA() {
    if (this.idPaciente !== null) {
      console.log(this.idPaciente);
      this._pacienteService.obtenerPacienteForm1PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.tipo_documento = res.paciente.tipo_documento;
          this.datos.numero_documento = res.paciente.numero_documento;
          this.datos.celular = res.paciente.celular;
          this.datos.email = res.paciente.email;
          this.datos.fecha_nacimiento = res.paciente.fecha_nacimiento;
          this.datos.edad_paciente = res.paciente.edad_paciente;
          this.datos.ciudad_reside = res.paciente.ciudad_reside;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          this.datos.estado_civil = res.paciente.estado_civil;
          this.datos.tipo_parto_nacer = res.paciente.tipo_parto_nacer;
          this.datos.numero_hijos = res.paciente.numero_hijos;
          this.datos.numero_gestaciones_embarazos = res.paciente.numero_gestaciones_embarazos;
          this.datos.lactancia = res.paciente.lactancia;
          this.datos.tiempo_lactancia = res.paciente.tiempo_lactancia;
          this.datos.uso_anticonceptivos = res.paciente.uso_anticonceptivos;
          this.datos.tiempo_uso_anticonceptivos = res.paciente.tiempo_uso_anticonceptivos;
          this.datos.antecedente_familiar_cancer = res.paciente.antecedente_familiar_cancer;
          this.datos.antecedente_familiar_cancer_mama = res.paciente.antecedente_familiar_cancer_mama;
          this.datos.trabaja = res.paciente.trabaja;
          this.datos.ocupacion = res.paciente.ocupacion;
          this.datos.nivel_educativo = res.paciente.nivel_educativo;
          this.datos.raza_grupo_etnico = res.paciente.raza_grupo_etnico;
          
          this.datos.peso = res.paciente.peso;
          this.datos.talla = res.paciente.talla;
          this.datos.cintura_abdominal = res.paciente.cintura_abdominal;
          
          this.datos.frecuencia_cardiaca = res.paciente.frecuencia_cardiaca;
          this.datos.frecuencia_respiratoria = res.paciente.frecuencia_respiratoria;
          this.datos.signos_vitales_presion_arterial = res.paciente.signos_vitales_presion_arterial;
          this.datos.temperatura = res.paciente.temperatura;
          
          this.datos.antecedentes_patologias_cronicas = res.paciente.antecedentes_patologias_cronicas;
          this.datos.habito_fumar = res.paciente.habito_fumar;
          this.datos.cigarrillos_por_dia = res.paciente.cigarrillos_por_dia;
          this.datos.tiempo_fumar = res.paciente.tiempo_fumar;
          this.datos.horas_sueno_por_dia = res.paciente.horas_sueno_por_dia;

          this.datos.obesidad_abdominal = res.paciente.obesidad_abdominal;
          this.datos.trigliceridos = res.paciente.trigliceridos;
          this.datos.colesterol = res.paciente.colesterol;
          this.datos.sindrome_metabolico_presion_arterial = res.paciente.sindrome_metabolico_presion_arterial;
          this.datos.glucosa = res.paciente.glucosa;
          
          this.datos.medicamento_1 = res.paciente.medicamento_1;
          this.datos.medicamento_2 = res.paciente.medicamento_2;
          this.datos.medicamento_3 = res.paciente.medicamento_3;
          this.datos.medicamento_4 = res.paciente.medicamento_4;
          this.datos.uso_antibioticos_ultimos_meses = res.paciente.uso_antibioticos_ultimos_meses;
          this.datos.antibioticos = res.paciente.antibioticos;
          
          this.datos.nombre = res.paciente.nombre;
          this.datos.fecha = res.paciente.fecha;
          this.datos.firma = res.paciente.firma;

          this.esModoEdicion = true;
        },
        (error) => {
          console.log(error);
        }
      )
    }
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
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm1(this.idPaciente, this.datos).subscribe(
        (res) => {
          console.log(res);
          this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
            (res) => {
              // console.log(res);
              this.router.navigate(['/visualizar-pacientes/usuario/', res._id]);
            },
            (error) => {
              console.log(error);
            }
          )
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      if (!this.datos.iniciales_paciente ||
          !this.datos.numero_hc ||
          !this.datos.tipo_documento ||
          !this.datos.numero_documento ||
          !this.datos.celular ||
          // !this.datos.email ||
          !this.datos.fecha_nacimiento ||
          !this.datos.edad_paciente ||
          !this.datos.ciudad_reside ||
          !this.datos.centro_institucion_atencion ||
          !this.datos.estado_civil ||
          !this.datos.tipo_parto_nacer ||
          !this.datos.numero_hijos ||
          !this.datos.numero_gestaciones_embarazos ||
          !this.datos.lactancia ||
          // !this.datos.tiempo_lactancia ||
          !this.datos.uso_anticonceptivos ||
          // !this.datos.tiempo_uso_anticonceptivos ||
          !this.datos.antecedente_familiar_cancer ||
          !this.datos.antecedente_familiar_cancer_mama ||
          !this.datos.trabaja ||
          // !this.datos.ocupacion ||
          !this.datos.nivel_educativo ||
          !this.datos.raza_grupo_etnico ||
          !this.datos.peso ||
          !this.datos.talla ||
          !this.datos.cintura_abdominal ||
          !this.datos.frecuencia_cardiaca ||
          !this.datos.frecuencia_respiratoria ||
          !this.datos.signos_vitales_presion_arterial ||
          !this.datos.temperatura ||
          !this.datos.antecedentes_patologias_cronicas ||
          !this.datos.habito_fumar ||
          // !this.datos.cigarrillos_por_dia ||
          // !this.datos.tiempo_fumar ||
          !this.datos.horas_sueno_por_dia ||
          !this.datos.obesidad_abdominal ||
          !this.datos.trigliceridos ||
          !this.datos.colesterol ||
          !this.datos.sindrome_metabolico_presion_arterial ||
          !this.datos.glucosa ||
          // !this.datos.medicamento_1 ||
          // !this.datos.medicamento_2 ||
          // !this.datos.medicamento_3 ||
          // !this.datos.medicamento_4 ||
          !this.datos.uso_antibioticos_ultimos_meses ||
          // !this.datos.antibioticos ||
          !this.datos.nombre ||
          !this.datos.fecha ||
          !this.datos.firma) {
            Swal.fire({
              icon: "warning",
              title: "Campos vacios",
              text: "Debe llenar todos los campos",
              allowOutsideClick: false
            })
            return
          }
          
      // Verifica si se seleccionó una imagen
      // if (this.selectedFile) {
        // Ahora puedes continuar con el proceso de registro y adjuntar la imagen
        const formData = new FormData();
        // formData.append('imagen', this.selectedFile);

        // Añade otros datos del formulario a formData, por ejemplo:
        formData.append('iniciales_paciente', this.datos.iniciales_paciente || "-");
        formData.append('numero_hc', this.datos.numero_hc || "-");
        formData.append('tipo_documento', this.datos.tipo_documento || "-");
        formData.append('numero_documento', this.datos.numero_documento || "-");
        formData.append('celular', this.datos.celular || "-");
        formData.append('email', this.datos.email || "-");
        formData.append('fecha_nacimiento', this.datos.fecha_nacimiento || "-");
        formData.append('edad_paciente', this.datos.edad_paciente || "-");
        formData.append('ciudad_reside', this.datos.ciudad_reside || "-");
        formData.append('centro_institucion_atencion', this.datos.centro_institucion_atencion || "-");
        formData.append('estado_civil', this.datos.estado_civil || "-");
        formData.append('tipo_parto_nacer', this.datos.tipo_parto_nacer || "-");
        formData.append('numero_hijos', this.datos.numero_hijos || "-");
        formData.append('numero_gestaciones_embarazos', this.datos.numero_gestaciones_embarazos || "-");
        formData.append('lactancia', this.datos.lactancia || "-");
        formData.append('tiempo_lactancia', this.datos.tiempo_lactancia || "-");
        formData.append('uso_anticonceptivos', this.datos.uso_anticonceptivos || "-");
        formData.append('tiempo_uso_anticonceptivos', this.datos.tiempo_uso_anticonceptivos || "-");
        formData.append('antecedente_familiar_cancer', this.datos.antecedente_familiar_cancer || "-");
        formData.append('antecedente_familiar_cancer_mama', this.datos.antecedente_familiar_cancer_mama || "-");
        formData.append('trabaja', this.datos.trabaja || "-");
        formData.append('ocupacion', this.datos.ocupacion || "-");
        formData.append('nivel_educativo', this.datos.nivel_educativo || "-");
        formData.append('raza_grupo_etnico', this.datos.raza_grupo_etnico || "-");

        formData.append('peso', this.datos.peso || "-");
        formData.append('talla', this.datos.talla || "-");
        formData.append('cintura_abdominal', this.datos.cintura_abdominal || "-");

        formData.append('frecuencia_cardiaca', this.datos.frecuencia_cardiaca || "-");
        formData.append('frecuencia_respiratoria', this.datos.frecuencia_respiratoria || "-");
        formData.append('signos_vitales_presion_arterial', this.datos.signos_vitales_presion_arterial || "-");
        formData.append('temperatura', this.datos.temperatura || "-");

        formData.append('antecedentes_patologias_cronicas', this.datos.antecedentes_patologias_cronicas || "-");
        formData.append('habito_fumar', this.datos.habito_fumar || "-");
        formData.append('cigarrillos_por_dia', this.datos.cigarrillos_por_dia || "-");
        formData.append('tiempo_fumar', this.datos.tiempo_fumar || "-");
        formData.append('horas_sueno_por_dia', this.datos.horas_sueno_por_dia || "-");

        formData.append('obesidad_abdominal', this.datos.obesidad_abdominal || "-");
        formData.append('trigliceridos', this.datos.trigliceridos || "-");
        formData.append('colesterol', this.datos.colesterol || "-");
        formData.append('sindrome_metabolico_presion_arterial', this.datos.sindrome_metabolico_presion_arterial || "-");
        formData.append('glucosa', this.datos.glucosa || "-");

        formData.append('medicamento_1', this.datos.medicamento_1 || "-");
        formData.append('medicamento_2', this.datos.medicamento_2 || "-");
        formData.append('medicamento_3', this.datos.medicamento_3 || "-");
        formData.append('medicamento_4', this.datos.medicamento_4 || "-");
        formData.append('uso_antibioticos_ultimos_meses', this.datos.uso_antibioticos_ultimos_meses || "-");
        formData.append('antibioticos', this.datos.antibioticos || "-");

        formData.append('nombre', this.datos.nombre || "-");
        formData.append('fecha', this.datos.fecha || "-");
        formData.append('firma', this.datos.firma || "-");


        console.log(this.datos);

        // Llama a la función de registro en tu servicio con el formData
        this._pacienteService.registerForm1(formData).subscribe(
          (res) => {
            console.log(res);
            
            this.toastr.success('El paciente fue registrado con exito!', 'Paciente Registrado!')

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
            Swal.fire({
              icon: "error",
              title: "Datos de la paciente ya existe",
              text: "Los datos de esta paciente ya fueron registrados anteriormente",
              showCloseButton: true,
              allowOutsideClick: false,
              confirmButtonText: 'Regresar al menú de navegación',
            }).then((result) => {
              if (result.isConfirmed) {
                // Redirigir a la página principal
                this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
                  (result) => {
                    console.log(result.idUsuario);
                    console.log(result.idPaciente);
                    this.router.navigate(['/']);
                  },
                  (err) => {
                    console.log(err);
                  }
                )
              }
            })
            return
          }
        );
      // } else {
      //   console.log("error");
      //   // Muestra un mensaje de error o realiza alguna acción si no se seleccionó una imagen.
      // }
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
