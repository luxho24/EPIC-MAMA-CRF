import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario7 } from 'src/app/models/formulario7.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario7',
  templateUrl: './formulario7.component.html',
  styleUrls: ['./formulario7.component.css']
})
export class Formulario7Component {
  datos = <Formulario7>{}
  resultados_tumor = [
    {tumor: "T1"},
    {tumor: "T2"},
    {tumor: "T3"},
    {tumor: "T4"}
  ]
  resultados_nodulo = [
    {nodulo: "n0"},
    {nodulo: "n1"},
    {nodulo: "n2"},
  ]
  resultados_metastasis = [
    {metastasis: "M0"},
    // {metastasis: "M1"}
  ]

  idUsuario!: any;
  idPaciente!: any;

  public isAdmin: boolean = false;
  public isUser: boolean = false;

  esModoEdicion: boolean = false;
  
  mostrarEvaluacion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute, private toastr: ToastrService){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');
    
    /** ! Este codigo es momentaneo, ya que posteriormente bloqueare los botones del menu de navegacion
     * para que no puedan actualizar o volver a registrar paciente que ya existan en la base de datos,
     * esto en lo que se refiere al usuario normal */
    if (this.idUsuario !== null) {

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (res === 'administrador') {
              this.mostrarDatosPacienteSA()
              this.obtenerDatosPaciente()
            } else {
              this.mostrarDatos();
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }

    // this.mostrarDatosPacienteSA()
    // this.mostrarDatos();
  }

  //** Esta funcion solo trae "iniciales_paciente", "numero_hc", "centro_institucion_atencion", "nombre", "fecha" y "firma" unicamente con el id del paciente para poder registrar (SUPERADMIN) */
  obtenerDatosPaciente(){
    this._pacienteService.obtenerPacientePorIdPaciente(this.idPaciente).subscribe(
      (res) => {
        console.log(res);
        this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
        this.datos.numero_hc = res.paciente.numero_hc;
        this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
        
        this.datos.nombre = res.paciente.nombre;
        this.datos.fecha = res.paciente.fecha;
        this.datos.firma = res.paciente.firma;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  toggleEvaluacion() {
    // Si se selecciona Ciclo 3 o Ciclo 6, mostrar el bloque de Evaluación de respuesta al tratamiento
    if (this.datos.ciclo === 'CICLO 03' || this.datos.ciclo === 'CICLO 06') {
      this.mostrarEvaluacion = true;
    } else {
      this.mostrarEvaluacion = false;
    }
  }

  //** Esta funcion es para (USUARIO) */
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
          
          this.datos.nombre = res.paciente.nombre;
          this.datos.fecha = res.paciente.fecha;
          this.datos.firma = res.paciente.firma;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  //** Esta funcion es para (SUPERADMIN) */
  mostrarDatosPacienteSA() {
    if (this.idPaciente !== null) {
      console.log(this.idPaciente);
      this._pacienteService.obtenerPacienteForm7PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          this.datos.tratamiento_medicamento_1 = res.paciente.tratamiento_medicamento_1;
          this.datos.tratamiento_dosis_1 = res.paciente.tratamiento_dosis_1;
          this.datos.tratamiento_medicamento_2 = res.paciente.tratamiento_medicamento_2;
          this.datos.tratamiento_dosis_2 = res.paciente.tratamiento_dosis_2;
          this.datos.tratamiento_medicamento_3 = res.paciente.tratamiento_medicamento_3;
          this.datos.tratamiento_dosis_3 = res.paciente.tratamiento_dosis_3;
          this.datos.tratamiento_medicamento_4 = res.paciente.tratamiento_medicamento_4;
          this.datos.tratamiento_dosis_4 = res.paciente.tratamiento_dosis_4;
          this.datos.tratamiento_medicamento_5 = res.paciente.tratamiento_medicamento_5;
          this.datos.tratamiento_dosis_5 = res.paciente.tratamiento_dosis_5;
          this.datos.tratamiento_medicamento_6 = res.paciente.tratamiento_medicamento_6;
          this.datos.tratamiento_dosis_6 = res.paciente.tratamiento_dosis_6;
          this.datos.tratamiento_medicamento_7 = res.paciente.tratamiento_medicamento_7;
          this.datos.tratamiento_dosis_7 = res.paciente.tratamiento_dosis_7;
          this.datos.tratamiento_medicamento_8 = res.paciente.tratamiento_medicamento_8;
          this.datos.tratamiento_dosis_8 = res.paciente.tratamiento_dosis_8;
          this.datos.tratamiento_medicamento_9 = res.paciente.tratamiento_medicamento_9;
          this.datos.tratamiento_dosis_9 = res.paciente.tratamiento_dosis_9;
          this.datos.tratamiento_medicamento_10 = res.paciente.tratamiento_medicamento_10;
          this.datos.tratamiento_dosis_10 = res.paciente.tratamiento_dosis_10;

          this.datos.fecha_tratamiento = res.paciente.fecha_tratamiento;
          this.datos.ciclo = res.paciente.ciclo;
          this.datos.tolerancia = res.paciente.tolerancia;
          this.datos.evaluacion_respuesta_tratamiento = res.paciente.evaluacion_respuesta_tratamiento;

          this.datos.nombre = res.paciente.nombre;
          this.datos.fecha = res.paciente.fecha;
          this.datos.firma = res.paciente.firma;

          this.esModoEdicion = true;
          this.toggleEvaluacion()
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // Funcion para registrar los datos del paciente del formulario 5
  registrarForm7() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm7(this.idPaciente, this.datos).subscribe(
        (res) => {
          console.log(res);

          this.toastr.info('Los datos de la paciente fueron actualizados con exito!', 'Paciente Actualizado!')

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
      if (!this.datos.fecha_tratamiento ||
        !this.datos.ciclo ||
        !this.datos.tolerancia) {
          Swal.fire({
            icon: "warning",
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            allowOutsideClick: false
          })
          return
        }
      this._pacienteService.registerForm7(this.datos).subscribe(
        (res) => {
          console.log(res);

          this.toastr.success('Ciclos de tratamiento quiroterápico de la paciente fue registrado con exito!', 'Ciclos de Tratamiento Quiroterápico de la Paciente Registrado!')

          /* 
            * Verificar el codigo de abajo 👇
          */

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
      )
    }
  }

  regresar() {
    if (this.esModoEdicion) {
      if (this.idPaciente !== null) {
        this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
          (res) => {
            // console.log(res);
            this.router.navigate(['/visualizar-pacientes/usuario/', res._id]);
          },
          (error) => {
            console.log(error);
          }
        )
      }
    } else {
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
  }
}
