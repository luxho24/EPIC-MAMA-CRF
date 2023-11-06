import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { Paciente } from '../models/paciente.model';
import { Formulario2 } from '../models/formulario2.model';
import { Formulario3 } from '../models/formulario3.model';
import { Formulario4 } from '../models/formulario4.model';
import { Formulario5 } from '../models/formulario5.model';
import { Formulario6 } from '../models/formulario6.model';
import { Formulario7 } from '../models/formulario7.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url = `${environment.URL_BASE}/pacientes`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  // * Registro de los formularios con datos del paciente
  // Funcion para registrar paciente en el formulario 1
  registerForm1(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatients', paciente);
  }
  // Funcion para registrar paciente en el formulario 2
  registerForm2(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm2', paciente);
  }
  // Funcion para registrar paciente en el formulario 3
  registerForm3(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm3', paciente);
  }
  // Funcion para registrar paciente en el formulario 4
  registerForm4(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm4', paciente);
  }
  // Funcion para registrar paciente en el formulario 5
  registerForm5(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm5', paciente);
  }
  // Funcion para registrar paciente en el formulario 6
  registerForm6(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm6', paciente);
  }
  // Funcion para registrar paciente en el formulario 7
  registerForm7(paciente: any) {
    return this.httpClient.post<any>(this.url + '/registerPatientsForm7', paciente);
  }

  // * Obtencion de los formularios con datos del paciente
  // Funcion para obtener pacientes del formulario 1
  obtenerPacientesForm1(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm1/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 2
  obtenerPacientesForm2(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm2/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 3
  obtenerPacientesForm3(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm3/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 4
  obtenerPacientesForm4(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm4/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 5
  obtenerPacientesForm5(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm5/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 6
  obtenerPacientesForm6(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm6/${idUsuario}`);
  }
  // Funcion para obtener pacientes del formulario 7
  obtenerPacientesForm7(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesForm7/${idUsuario}`);
  }

  // * Obtencion de los formularios con todos los datos del paciente sin restriccion de rol de usuario
  // Funcion para obtener todos los pacientes del formulario 1 sin resticcion de rol de usuario
  obtenerPacientesSAForm1(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm1/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 2 sin resticcion de rol de usuario
  obtenerPacientesSAForm2(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm2/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 3 sin resticcion de rol de usuario
  obtenerPacientesSAForm3(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm3/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 4 sin resticcion de rol de usuario
  obtenerPacientesSAForm4(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm4/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 5 sin resticcion de rol de usuario
  obtenerPacientesSAForm5(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm5/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 6 sin resticcion de rol de usuario
  obtenerPacientesSAForm6(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm6/${idUsuario}`);
  }
  // Funcion para obtener todos los pacientes del formulario 7 sin resticcion de rol de usuario
  obtenerPacientesSAForm7(idUsuario: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacientesSAForm7/${idUsuario}`);
  }

  // * Obtencion de datos requeridos
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

  // * Obtener los datos del paciente solo por el idPaciente
  // Funcion para obetner los datos del paciente para el formulario 1 solo con el idPaciente
  obtenerPacienteForm1PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm1PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 2 solo con el idPaciente
  obtenerPacienteForm2PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm2PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 3 solo con el idPaciente
  obtenerPacienteForm3PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm3PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 4 solo con el idPaciente
  obtenerPacienteForm4PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm4PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 5 solo con el idPaciente
  obtenerPacienteForm5PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm5PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 6 solo con el idPaciente
  obtenerPacienteForm6PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm6PorIdPaciente/${idPaciente}`);
  }
  // Funcion para obetner los datos del paciente para el formulario 7 solo con el idPaciente
  obtenerPacienteForm7PorIdPaciente(idPaciente: any): Observable<any> {
    return this.httpClient.get(`${this.url}/obtenerPacienteForm7PorIdPaciente/${idPaciente}`);
  }

  // * Funcion para editar datos del paciente sin restriccion de rol de usuario
  editarPacienteForm1(idPaciente: any, paciente: Paciente): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm1/${idPaciente}`, paciente);
  }
  editarPacienteForm2(idPaciente: any, paciente: Formulario2): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm2/${idPaciente}`, paciente);
  }
  editarPacienteForm3(idPaciente: any, paciente: Formulario3): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm3/${idPaciente}`, paciente);
  }
  editarPacienteForm4(idPaciente: any, paciente: Formulario4): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm4/${idPaciente}`, paciente);
  }
  editarPacienteForm5(idPaciente: any, paciente: Formulario5): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm5/${idPaciente}`, paciente);
  }
  editarPacienteForm6(idPaciente: any, paciente: Formulario6): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm6/${idPaciente}`, paciente);
  }
  editarPacienteForm7(idPaciente: any, paciente: Formulario7): Observable<any> {
    return this.httpClient.put(`${this.url}/editarPacienteForm7/${idPaciente}`, paciente);
  }
}
