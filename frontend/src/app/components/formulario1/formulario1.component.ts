import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

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
  // numero_hc: string = '';

  constructor(private _pacienteService: PacienteService, private router: Router){}

  ngOnInit(): void {
    
  }

  registrarForm1() {
    this._pacienteService.registerForm1(this.datos).subscribe(
      (res) => {
        console.log(res);
        this._pacienteService.obtenerIds(this.datos.numero_hc).subscribe(
          (result) => {
            console.log(result.idUsuario);
            console.log(result.idPaciente);
            this.router.navigate(['/formulario2/usuario/', result.idUsuario, 'paciente', result.idPaciente]);
            // Aca va la logica de habilitar nuevamente los botones para ingresar a los formularios
            // Tambien colocar la logica de autocompletar los datos del paciente registrado por medio del id en la url
          },
          (err) => {
            console.log(err);
          }
        )
        // return this.router.navigate(['/formulario2']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
