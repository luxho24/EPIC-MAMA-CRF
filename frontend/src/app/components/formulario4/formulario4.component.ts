import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario4 } from 'src/app/models/formulario4.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css']
})
export class Formulario4Component implements OnInit {
  datos = <Formulario4>{}

  idUsuario!: any;
  idPaciente!: any;

  public isAdmin: boolean = false;
  public isUser: boolean = false;

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute, private toastr: ToastrService){};

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
      this._pacienteService.obtenerPacienteForm4PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          this.datos.criterios_inclusion_1 = res.paciente.criterios_inclusion_1;
          this.datos.criterios_inclusion_2 = res.paciente.criterios_inclusion_2;
          this.datos.criterios_inclusion_3 = res.paciente.criterios_inclusion_3;
          this.datos.criterios_inclusion_4 = res.paciente.criterios_inclusion_4;
          this.datos.criterios_inclusion_5 = res.paciente.criterios_inclusion_5;
          this.datos.criterios_inclusion_6 = res.paciente.criterios_inclusion_6;
          this.datos.criterios_inclusion_7 = res.paciente.criterios_inclusion_7;
          
          this.datos.criterios_exclusion_1 = res.paciente.criterios_exclusion_1;
          this.datos.criterios_exclusion_2 = res.paciente.criterios_exclusion_2;
          this.datos.criterios_exclusion_3 = res.paciente.criterios_exclusion_3;
          this.datos.criterios_exclusion_4 = res.paciente.criterios_exclusion_4;
          this.datos.criterios_exclusion_5 = res.paciente.criterios_exclusion_5;
          this.datos.criterios_exclusion_6 = res.paciente.criterios_exclusion_6;
          
          this.datos.criterios_elegibilidad_estudio = res.paciente.criterios_elegibilidad_estudio;

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

  // Funcion para registrar los datos del paciente del formulario 4
  registrarForm4() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm4(this.idPaciente, this.datos).subscribe(
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
      if (!this.datos.criterios_inclusion_1 ||
        !this.datos.criterios_inclusion_2 ||
        !this.datos.criterios_inclusion_3 ||
        !this.datos.criterios_inclusion_4 ||
        !this.datos.criterios_inclusion_5 ||
        !this.datos.criterios_inclusion_6 ||
        !this.datos.criterios_inclusion_7 ||
        !this.datos.criterios_exclusion_1 ||
        !this.datos.criterios_exclusion_2 ||
        !this.datos.criterios_exclusion_3 ||
        !this.datos.criterios_exclusion_4 ||
        !this.datos.criterios_exclusion_5 ||
        !this.datos.criterios_exclusion_6 ||
        !this.datos.criterios_elegibilidad_estudio) {
          Swal.fire({
            icon: "warning",
            title: "Campos vacios",
            text: "Debe llenar todos los campos",
            allowOutsideClick: false
          })
          return
        }
      this._pacienteService.registerForm4(this.datos).subscribe(
        (res) => {
          console.log(res);

          this.toastr.success('Criterios de selección / screening de la paciente fue registrado con exito!', 'Criterios de Selección / Screening de la Paciente Registrado!')

          this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
            (result) => {
              console.log(result.idUsuario);
              console.log(result.idPaciente);
              this.router.navigate(['/formulario5/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
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
