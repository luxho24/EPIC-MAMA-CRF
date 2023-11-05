import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario3 } from 'src/app/models/formulario3.model'
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component implements OnInit {
  datos = <Formulario3>{}

  idUsuario!: any;
  idPaciente!: any;

  // model!: Formulario3;

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute){}

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
      this._pacienteService.obtenerPacienteForm3PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          this.datos.cuenta_consentimiento_informado = res.paciente.cuenta_consentimiento_informado;
          this.datos.fecha_consentimiento_informado = res.paciente.fecha_consentimiento_informado;

          this.esModoEdicion = true;
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // Funcion para registrar los datos del paciente del formulario 3
  registrarForm3() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm3(this.idPaciente, this.datos).subscribe(
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
      this._pacienteService.registerForm3(this.datos).subscribe(
        (res) => {
          console.log(res);
          /* 
            * Verificar el codigo de abajo 👇
          */
  
          this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
            (result) => {
              console.log(result.idUsuario);
              console.log(result.idPaciente);
              this.router.navigate(['/formulario4/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
            },
            (err) => {
              console.log(err);
            }
          )
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // editarPacienteForm3(pacientef3: Formulario3) {
  //   if (this.idPaciente !== null) {
  //     this._pacienteService.editarPacienteForm3(this.idPaciente, pacientef3).subscribe(
  //       (res) => {
  //         console.log(res);
  //         this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
  //           (res) => {
  //             // console.log(res);
  //             this.router.navigate(['/visualizar-pacientes/usuario/', res._id]);
  //           },
  //           (error) => {
  //             console.log(error);
  //           }
  //         )
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //   }
  // }
}
