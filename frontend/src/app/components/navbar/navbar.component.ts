import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authService: AuthService){}

  ngOnInit(): void {
    
  }

  logout() {
    Swal.fire({
      title: "Cerrar Sesión",
      text: "¿Seguro que deseas cerrar sesión?",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      showDenyButton: true,
      denyButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        this._authService.logout()
      }
    });
  }
}
