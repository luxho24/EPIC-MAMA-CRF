import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _pacienteService: PacienteService, private router: Router){}

  ngOnInit(): void {
    
  }

  registrarForm2() {
    console.log(this.datos);
  }
}
