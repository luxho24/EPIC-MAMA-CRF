import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario2 } from 'src/app/models/formulario2.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  datos = <Formulario2>{};
  tipo_histologico = [
    {tipo: "DUCTAL INFILTRANTE"},
    {tipo: "LOBULILLAR INFILTRANTE"},
    {tipo: "MIXTO DUCTO-LOBULILLAR"},
    {tipo: "MUCINOSO"},
    {tipo: "TUBULAR"},
    {tipo: "MEDULAR"},
    {tipo: "PAPILAR"},
    {tipo: "PLEOMÓRFICO"},
    {tipo: "METAPLASIA FUSOCELULAR Y ESCAMOSO"}
  ]

  idUsuario!: any;
  idPaciente!: any;

  public isAdmin: boolean = false;
  public isUser: boolean = false;

  esModoEdicion: boolean = false;

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
      this._pacienteService.obtenerPacienteForm2PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          this.datos.signos_sintomas_inicio = res.paciente.signos_sintomas_inicio;
          this.datos.fecha_inicio_sintomas_signos = res.paciente.fecha_inicio_sintomas_signos;
          this.datos.tiempo_meses_diagnostico = res.paciente.tiempo_meses_diagnostico;
          this.datos.tamano_tumor_campo1 = res.paciente.tamano_tumor_campo1;
          this.datos.tamano_tumor_campo2 = res.paciente.tamano_tumor_campo2;
          this.datos.ganglios_axilares = res.paciente.ganglios_axilares;
          this.datos.tipo_histologico = res.paciente.tipo_histologico;
          this.datos.conclusion_informe = res.paciente.conclusion_informe;
          this.datos.clasificacion_molecular = res.paciente.clasificacion_molecular;

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

  // Funcion para registrar los datos del paciente del formulario 2
  registrarForm2() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm2(this.idPaciente, this.datos).subscribe(
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
      if (!this.datos.signos_sintomas_inicio ||
        !this.datos.fecha_inicio_sintomas_signos ||
        !this.datos.tiempo_meses_diagnostico ||
        !this.datos.tamano_tumor_campo1 ||
        !this.datos.tamano_tumor_campo2 ||
        !this.datos.ganglios_axilares ||
        !this.datos.tipo_histologico ||
        !this.datos.conclusion_informe ||
        !this.datos.clasificacion_molecular) {
          Swal.fire({
            icon: "warning",
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            allowOutsideClick: false
          })
          return
        }
      this._pacienteService.registerForm2(this.datos).subscribe(
        (res) => {
          console.log(res);

          this.toastr.success('Datos clínicos de la paciente fue registrado con exito!', 'Datos Clínicos de la Paciente Registrado!')

          /* 
          * Verificar el codigo de abajo 👇
          */

          this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
            (result) => {
              console.log(result.idUsuario);
              console.log(result.idPaciente);
              this.router.navigate(['/formulario3/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
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
