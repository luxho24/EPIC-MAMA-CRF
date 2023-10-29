import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos = <Usuario>{};

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // if (this._authService.loggedin()) {
    //   this.router.navigateByUrl('/', { replaceUrl: true }).then(() => {
    //     this.router.navigate([this.router.url]);
    //   });
    // }
    if (this._authService.loggedin()) {
      //this.router.navigate(['/menu']); // Redirige a la página principal si ya hay una sesión iniciada
      const token = sessionStorage.getItem('token')

      if (token) {
        this._authService.obtenerIdUsuarioDesdeToken(token).subscribe(
          (response) => {
            console.log(response);
            // const idUsuario = response.idUsuario;
            // console.log('ID del usuario:', idUsuario);
            this.router.navigate(['/menu/usuario', response])
          },
          (err) => {
            console.log(err);
          }
        )
      }
    }
  }

  loginUsuario() {
    this._authService.login(this.datos).subscribe(
      (res) => {
        console.log(res);
        sessionStorage.setItem('token', res.token); // Me salio un error, pero era por falta de <any> en el AuthService
        return this.router.navigate(['/menu/usuario', res._id]);
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
