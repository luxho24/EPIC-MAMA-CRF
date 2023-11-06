import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario7 } from 'src/app/models/formulario7.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';

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

  esModoEdicion: boolean = false;

  constructor(private _pacienteService: PacienteService, private _authService: AuthService, private router: Router, private aRoute: ActivatedRoute){}

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
      this._pacienteService.obtenerPacienteForm7PorIdPaciente(this.idPaciente).subscribe(
        (res) => {
          console.log(res);
          // Rellenar los campos con los datos obtenidos
          this.datos.iniciales_paciente = res.paciente.iniciales_paciente;
          this.datos.numero_hc = res.paciente.numero_hc;
          this.datos.centro_institucion_atencion = res.paciente.centro_institucion_atencion;
          
          // this.datos.resultados_hemograma = res.paciente.resultados_hemograma;
          // this.datos.fecha_hemograma = res.paciente.fecha_hemograma;
          // this.datos.resultados_otros_estudios = res.paciente.resultados_otros_estudios;
          // this.datos.fecha_otros_estudios = res.paciente.fecha_otros_estudios;
          // this.datos.fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos = res.paciente.fecha_muestra_marcadores_inflamatorios_pretratamiento_sericos;
          // this.datos.codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos = res.paciente.codigo_muestra_marcadores_inflamatorios_pretratamiento_sericos;
          
          // this.datos.fecha_muestra_tumor = res.paciente.fecha_muestra_tumor;
          // this.datos.fecha_microbioma_intestinal = res.paciente.fecha_microbioma_intestinal;
          // this.datos.fecha_microbioma_salival = res.paciente.fecha_microbioma_salival;

          // this.datos.ecografia = res.paciente.ecografia;
          // this.datos.mamografia = res.paciente.mamografia;
          // this.datos.gamagrafia_osea = res.paciente.gamagrafia_osea;
          // this.datos.tomografia = res.paciente.tomografia;
          // this.datos.rmn = res.paciente.rmn;
          // this.datos.pet = res.paciente.pet;
          
          // this.datos.tumor = res.paciente.tumor;
          // this.datos.nodulo = res.paciente.nodulo;
          // this.datos.metastasis = res.paciente.metastasis;

          // this.datos.estadificacion_paciente = res.paciente.estadificacion_paciente;

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
  registrarForm7() {
    console.log(this.datos);
    if (this.esModoEdicion) {
      this._pacienteService.editarPacienteForm7(this.idPaciente, this.datos).subscribe(
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
      this._pacienteService.registerForm7(this.datos).subscribe(
        (res) => {
          console.log(res);
          /* 
            * Verificar el codigo de abajo 👇
          */

          this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
            (result) => {
              console.log(result.idUsuario);
              console.log(result.idPaciente);
              // this.router.navigate(['/formulario6/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
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
