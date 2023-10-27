import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { Usuario } from 'src/app/models/usuario.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  datosUsuario = <Usuario>{}
  datosPaciente = <Paciente>{}

  idUsuario!: any;
  idPaciente!: any;

  numero_hc: string = '';

  botonesHabilitados = false;
  botonesHabilitadosForm1 = true;

  constructor(private _pacienteService: PacienteService, private router: Router){}

  ngOnInit(): void {
    
  }

  // Funcion para traer el "numero_hc" del paciente que YA se encuentre registrado en la base de datos
  obtenerPaciente() {
    this._pacienteService.obtenerPaciente(this.numero_hc).subscribe(
      (res) => {
        console.log(res);
        this.botonesHabilitados = true; // Habilita los botones
        this.botonesHabilitadosForm1 = false; // Habilita los botones
      },
      (error) => {
        console.log(error);
        this.botonesHabilitados = false; // Deja los botones deshabilitados
        this.botonesHabilitadosForm1 = true; // Deja los botones deshabilitados
      }
    )
    // console.log(this.numero_hc);
  }
  
  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario2() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario2/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario3() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario3/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario4() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario4/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario5() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario5/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario6() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario6/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario7() {
    console.log(this.numero_hc);

    this._pacienteService.obtenerIds(this.numero_hc).subscribe(
      (res) => {
        console.log(res.idUsuario);
        console.log(res.idPaciente);
        this.router.navigate(['/formulario7/usuario/', res.idUsuario, 'paciente', res.idPaciente]);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  
  // Funcion para obtener los ids del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarVerPacientes() {
    this.router.navigate(['/visualizar-pacientes']);
  }
}
