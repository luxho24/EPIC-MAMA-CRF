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

  registerForm1(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatients', paciente);
  }
  
  registerForm2(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatients', paciente);
  }

  obtenerPaciente(numero_hc: string): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPaciente?numero_hc=${numero_hc}`);
  }
}
