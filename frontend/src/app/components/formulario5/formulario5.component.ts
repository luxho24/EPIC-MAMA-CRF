import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario5 } from 'src/app/models/formulario5.model'
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-formulario5',
  templateUrl: './formulario5.component.html',
  styleUrls: ['./formulario5.component.css']
})
export class Formulario5Component implements OnInit {
  datos = <Formulario5>{}
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
    {metastasis: "M1"}
  ]

  idUsuario!: any;
  idPaciente!: any;

  constructor(private _pacienteService: PacienteService, private router: Router, private aRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');
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

  // Funcion para registrar los datos del paciente del formulario 5
  registrarForm5() {
    console.log(this.datos);
    this._pacienteService.registerForm5(this.datos).subscribe(
      (res) => {
        console.log(res);
        /* 
          * Verificar el codigo de abajo 👇
        */

        this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
          (result) => {
            console.log(result.idUsuario);
            console.log(result.idPaciente);
            this.router.navigate(['/formulario6/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
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
