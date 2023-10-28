import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formulario2 } from 'src/app/models/formulario2.model';
import { Formulario3 } from 'src/app/models/formulario3.model';
import { Formulario4 } from 'src/app/models/formulario4.model';
import { Formulario5 } from 'src/app/models/formulario5.model';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-visualizar-pacientes',
  templateUrl: './visualizar-pacientes.component.html',
  styleUrls: ['./visualizar-pacientes.component.css']
})
export class VisualizarPacientesComponent implements OnInit {
  tablaVisible: number = 0; // Variable para controlar qué tabla se muestra
  isButtonSelected: number = 0;

  pacientes: Paciente[] = [];
  datosf2: Formulario2[] = [];
  datosf3: Formulario3[] = [];
  datosf4: Formulario4[] = [];
  datosf5: Formulario5[] = [];
  // datosf6: Formulario6[] = [];
  // datosf7: Formulario7[] = [];

  idUsuario!: any;
  constructor(private _pacienteService: PacienteService, private aRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
  }
  
  mostrarTabla(numeroTabla: number): void {
    this.tablaVisible = numeroTabla;
    this.toggleButton(numeroTabla);

    switch (this.tablaVisible) {
      case 1: this.obtenerPacientesForm1(); break;
      case 2: this.obtenerPacientesForm2(); break;
      case 3: this.obtenerPacientesForm3(); break;
      case 4: this.obtenerPacientesForm4(); break;
      case 5: this.obtenerPacientesForm5(); break;
      // case 6: this.obtenerPacientesForm6(); break;
      // case 7: this.obtenerPacientesForm7(); break;
    }
  }

  toggleButton(buttonNumber: number) {
    if (this.isButtonSelected === buttonNumber) {
      this.isButtonSelected = 0; // Deselecciona el botón si ya está seleccionado
    } else {
      this.isButtonSelected = buttonNumber; // Selecciona el botón
    }
  }

  obtenerPacientesForm1(){
    if (this.idUsuario !== null) {
      this._pacienteService.obtenerPacientesForm1(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.pacientes = res
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  obtenerPacientesForm2(){
    if (this.idUsuario !== null) {
      this._pacienteService.obtenerPacientesForm2(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.datosf2 = res
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  obtenerPacientesForm3(){
    if (this.idUsuario !== null) {
      this._pacienteService.obtenerPacientesForm3(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.datosf3 = res
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  obtenerPacientesForm4(){
    if (this.idUsuario !== null) {
      this._pacienteService.obtenerPacientesForm4(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.datosf4 = res
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  obtenerPacientesForm5(){
    if (this.idUsuario !== null) {
      this._pacienteService.obtenerPacientesForm5(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.datosf5 = res
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // obtenerPacientesForm6(){
  //   if (this.idUsuario !== null) {
  //     this._pacienteService.obtenerPacientesForm6(this.idUsuario).subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.datosf6 = res
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //   }
  // }

  // obtenerPacientesForm7(){
  //   if (this.idUsuario !== null) {
  //     this._pacienteService.obtenerPacientesForm7(this.idUsuario).subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.datosf7 = res
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //   }
  // }
}
