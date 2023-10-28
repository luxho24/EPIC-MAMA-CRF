import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `${environment.URL_BASE}/usuarios`;
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  login(usuario: any) {
    return this.httpClient.post<any>(this.url + '/login', usuario);
  }

  loggedin() {
    return !!sessionStorage.getItem('token'); // Retorna "true" o "false" si el token existe o no
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



  obtenerUsuarioPorId(idUsuario: string) {
    return this.httpClient.get<any>(this.url + '/obtenerUsuarioPorId/' + idUsuario);
  }
}
