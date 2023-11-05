import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario4 } from 'src/app/models/formulario4.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css']
})
export class Formulario4Component implements OnInit {
  datos = <Formulario4>{}

  idUsuario!: any;
  idPaciente!: any;

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute){};

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');
    this.mostrarDatosPacienteSA()
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
      this._pacienteService.registerForm4(this.datos).subscribe(
        (res) => {
          console.log(res);

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
        }
      )
    }
  }
}
