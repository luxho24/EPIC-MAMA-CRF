import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url = `${environment.URL_BASE}/pacientes`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  // Funcion para registrar paciente en el formulario 1
  registerForm1(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatients', paciente);
  }
  
  // Funcion para registrar paciente en el formulario 2
  registerForm2(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm2', paciente);
  }

  // Funcion para obtener verificar si existe el paciente de acuerdo al "numero_hc" (Usado en el boton buscar de "menu.ts")
  obtenerPaciente(numero_hc: string): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPaciente?numero_hc=${numero_hc}`);
  }

  // Funcion para obtener los ids del usuario y paciente de acuerdo al "numero_hc" (Usado en el boton formulario2 de "menu.ts")
  obtenerIds(numero_hc: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/obtenerIds?numero_hc=${numero_hc}`);
  }

  // Funcion para obetner el "iniciales_paciente, numero_hc, institucion_centro_atencion" del paciente (Usado en el "ngOnInit" de la pagina formulario2.ts)
  obtenerPacientePorId(idUsuario:any, idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientePorId/${idUsuario}/${idPaciente}`);
  }
}
