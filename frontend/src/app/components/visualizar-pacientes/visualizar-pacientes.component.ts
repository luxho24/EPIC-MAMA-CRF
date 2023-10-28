import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-pacientes',
  templateUrl: './visualizar-pacientes.component.html',
  styleUrls: ['./visualizar-pacientes.component.css']
})
export class VisualizarPacientesComponent implements OnInit {
  tablaVisible: number = 0; // Variable para controlar qué tabla se muestra

  constructor(){}

  ngOnInit(): void {
    
  }

  mostrarTabla(numeroTabla: number): void {
    this.tablaVisible = numeroTabla;
  }
}
