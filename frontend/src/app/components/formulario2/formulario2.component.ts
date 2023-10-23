import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario2 } from 'src/app/models/formulario2.model';
import { PacienteService } from 'src/app/services/paciente.service';

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

  constructor(private _pacienteService: PacienteService, private router: Router, private aRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');
    this.mostrarDatos();
  }

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

  registrarForm2() {
    console.log(this.datos);
  }
}
