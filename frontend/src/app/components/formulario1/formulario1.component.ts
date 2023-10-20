import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  datos = <Paciente>{};
  tipo_documento = [
    {tipo: "DNI"},
    {tipo: "Carnet de extranjería"},
    {tipo: "Otros (Pasaporte)"}
  ]
  ciudad_reside = [
    {ciudad: "LIMA"},
    {ciudad: "AREQUIPA"},
    {ciudad: "TRUJILLO"},
    {ciudad: "OTRO"}
  ]
  centro_institucion_atencion = [
    {institucion: "INEN LIMA"},
    {institucion: "INEN AREQUIPA"},
    {institucion: "INEN TRUJILLO"}
  ]
  estado_civil = [
    {estado: "CASADA"},
    {estado: "CONVIVIENTE"},
    {estado: "SOLTERA"},
    {estado: "SEPARADA"},
    {estado: "VIUDA"},
    {estado: "DIVORCIADA"}
  ]
  nivel_educativo = [
    {nivel: "ANALFABETO"},
    {nivel: "PRIMARIA"},
    {nivel: "SECUNDARIA"},
    {nivel: "SUPERIOR TÉCNICA"},
    {nivel: "SUPERIOR UNIIVERSITARIA"}
  ]
  raza_grupo_etnico = [
    {raza: "AYMARA"},
    {raza: "BLANCO"},
    {raza: "MESTIZO"},
    {raza: "NATIVO O INDÍGENA DE LA AMAZONÍA"},
    {raza: "NEGRO/MORENO/ZAMBO/MULATO/AFROPERUANO"},
    {raza: "QUECHUA"},
    {raza: "PRETENECIENTE O PARTE DE OTRO PUEBLO INDÍGENA U ORIGINARIO"}
  ]

  constructor(private _authService: AuthService, private router: Router){}

  ngOnInit(): void {
    
  }

  registrarForm1() {
    console.log(this.datos);
  }
}
