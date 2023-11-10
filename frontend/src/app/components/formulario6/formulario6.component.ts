import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario6 } from 'src/app/models/formulario6.model'
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario6',
  templateUrl: './formulario6.component.html',
  styleUrls: ['./formulario6.component.css']
})
export class Formulario6Component implements OnInit {
  datos = <Formulario6>{}
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
  detallar_medicacion_paciente_toma_recibe = [
    'Aines', 'Corticoides'
  ]

  opciones: string[] = []

  idUsuario!: any;
  idPaciente!: any;

  public isAdmin: boolean = false;
  public isUser: boolean = false;

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute, private toastr: ToastrService){
    this.opciones = []
  }

  verificar(c: string): void {
    let pos = this.opciones.indexOf(c)
    if (pos === -1) {
      this.opciones.push(c)
      console.log('agrego:', this.opciones)
      for (let index = 0; index < this.opciones.length; index++) {
        console.log(`Element at index ${index} is ${this.opciones[index]}`)
        
      }
    }else {
      this.opciones.splice(pos, 1)
      console.log('elimino:', this.opciones)
      for (let index = 0; index < this.opciones.length; index++) {
        console.log(`Element at index ${index} is ${this.opciones[index]}`)
        
      }
    }
  }

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

  mostrarDatosPacienteSA() {
    if (this.idPaciente !== null) {
      console.log(this.idPaciente);
      this._pacienteService.obtenerPacienteForm6PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          this.datos.cirugia = res.paciente.cirugia;
          this.datos.tipo_cirugia = res.paciente.tipo_cirugia;
          this.datos.fecha_procedimiento = res.paciente.fecha_procedimiento;
          this.datos.recibio_radioterapia = res.paciente.recibio_radioterapia;
          this.datos.fecha_inicio_recibio_radioterapia = res.paciente.fecha_inicio_recibio_radioterapia;
          this.datos.fecha_termino_recibio_radioterapia = res.paciente.fecha_termino_recibio_radioterapia;
      
          this.datos.recibio_hormonoterapia = res.paciente.recibio_hormonoterapia;
          this.datos.fecha_inicio_recibio_hormonoterapia = res.paciente.fecha_inicio_recibio_hormonoterapia;
          this.datos.fecha_termino_recibio_hormonoterapia = res.paciente.fecha_termino_recibio_hormonoterapia;
          
          this.datos.recibio_quimioterapia = res.paciente.recibio_quimioterapia;
          this.datos.fecha_inicio_recibio_quimioterapia = res.paciente.fecha_inicio_recibio_quimioterapia;
          this.datos.fecha_termino_recibio_quimioterapia = res.paciente.fecha_termino_recibio_quimioterapia;
          this.datos.detallar_medicacion_paciente_toma_recibe = res.paciente.detallar_medicacion_paciente_toma_recibe;
          // this.datos.detallar_medicacion_paciente_toma_recibe_aines = res.paciente.detallar_medicacion_paciente_toma_recibe_aines;
          // this.datos.detallar_medicacion_paciente_toma_recibe_corticoides = res.paciente.detallar_medicacion_paciente_toma_recibe_corticoides;
          this.datos.detallar_medicacion_paciente_toma_recibe_otros = res.paciente.detallar_medicacion_paciente_toma_recibe_otros;

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

  // Funcion para registrar los datos del paciente del formulario 5
  registrarForm6() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm6(this.idPaciente, this.datos).subscribe(
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
      for (let index = 0; index < this.opciones.length; index++) {
        console.log(`Element at index ${index} is ${this.opciones[index]}`)
        
        if (index === 0) {
          this.datos.detallar_medicacion_paciente_toma_recibe = this.opciones[index];
        } else {
          this.datos.detallar_medicacion_paciente_toma_recibe += ', ' + this.opciones[index];
        }
      }

      if (!this.datos.cirugia ||
        // !this.datos.tipo_cirugia ||
        // !this.datos.fecha_procedimiento ||
        !this.datos.recibio_radioterapia ||
        // !this.datos.fecha_inicio_recibio_radioterapia ||
        // !this.datos.fecha_termino_recibio_radioterapia ||
        !this.datos.recibio_hormonoterapia ||
        // !this.datos.fecha_inicio_recibio_hormonoterapia ||
        // !this.datos.fecha_termino_recibio_hormonoterapia ||
        !this.datos.recibio_quimioterapia ||
        // !this.datos.fecha_inicio_recibio_quimioterapia ||
        // !this.datos.fecha_termino_recibio_quimioterapia ||
        !this.datos.detallar_medicacion_paciente_toma_recibe
        // !this.datos.detallar_medicacion_paciente_toma_recibe_otros
        ) {
          Swal.fire({
            icon: "warning",
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            allowOutsideClick: false
          })
          return
        }

      this._pacienteService.registerForm6(this.datos).subscribe(
        (res) => {
          console.log(res);

          this.toastr.success('Tratamiento oncológico de la paciente fue registrado con exito!', 'Tratamiento Oncológico de la Paciente Registrado!')

          /* 
            * Verificar el codigo de abajo 👇
          */

          this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
            (result) => {
              console.log(result.idUsuario);
              console.log(result.idPaciente);
              this.router.navigate(['/formulario7/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
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
}
