import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  numero_hc: string = '';

  botonesHabilitados = false;
  botonesHabilitadosForm1 = true;

  constructor(private _pacienteService: PacienteService, private router: Router){}

  ngOnInit(): void {
    
  }

  obtenerPaciente() {
    this._pacienteService.obtenerPaciente(this.numero_hc).subscribe(
      (res) => {
        console.log(res);
        this.botonesHabilitados = true; // Habilita los botones
        this.botonesHabilitadosForm1 = false; // Habilita los botones
        // Aca va la logica de habilitar nuevamente los botones para ingresar a los formularios
        // Tambien colocar la logica de autocompletar los datos del paciente registrado por medio del id en la url
      },
      (error) => {
        console.log(error);
        this.botonesHabilitados = false; // Deja los botones deshabilitados
        this.botonesHabilitadosForm1 = true; // Deja los botones deshabilitados
      }
    )
    // console.log(this.numero_hc);
  }
}
