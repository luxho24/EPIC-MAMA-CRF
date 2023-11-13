import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente.model';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';

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

  // botonesHabilitados = false;
  // botonesHabilitadosForm1 = true;
  // Declaraciones de variables
  botonesHabilitadosForm1: boolean = true;
  botonesHabilitadosForm2: boolean = false;
  botonesHabilitadosForm3: boolean = false;
  botonesHabilitadosForm4: boolean = false;
  botonesHabilitadosForm5: boolean = false;
  botonesHabilitadosForm6: boolean = false;
  botonesHabilitadosForm7: boolean = false;

  // Variable para rastrear si se ha realizado una búsqueda
  busquedaRealizada: boolean = false;

  nombreUsuario: string = '';

  constructor(private _pacienteService: PacienteService, private _authService:AuthService, private router: Router, private aRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    
    if (this.idPaciente !== null) {
      this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.nombreUsuario = res.username
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // Funcion para traer el "numero_hc" del paciente que YA se encuentre registrado en la base de datos
  obtenerPaciente() {
    if (!this.numero_hc) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacios",
        text: "Debe llenar todos los campos",
        allowOutsideClick: false
      })
      return
    }
    this._pacienteService.obtenerPaciente(this.numero_hc).subscribe(
      (res) => {
        console.log(res);
        this._pacienteService.obtenerIdsForm(this.numero_hc).subscribe(
          (res: any) => {
            console.log(res);
  
            this.botonesHabilitadosForm1 = !res.idpaciente;
  
            const formulariosHabilitados = [
              res.idpacientef2,
              res.idpacientef3,
              res.idpacientef4,
              res.idpacientef5,
              res.idpacientef6,
              res.idpacientef7
            ];
            console.log(formulariosHabilitados);
            
            let todosCompletos = true;  // Variable para verificar si todos los formularios están completos
  
            for (let i = 0; i < formulariosHabilitados.length; i++) {
              if (formulariosHabilitados[i] === null) {
                todosCompletos = false;  // Si al menos uno es null, no están todos completos
  
                // Desbloquear los botones correspondientes a formularios que son null
                switch (i) {
                  case 0:
                    // Desbloquear botones formulario2
                    this.botonesHabilitadosForm2 = true;
                    break;
                  case 1:
                    // Desbloquear botones formulario3
                    this.botonesHabilitadosForm3 = true;
                    break;
                  case 2:
                    // Desbloquear botones formulario4
                    this.botonesHabilitadosForm4 = true;
                    break;
                  case 3:
                    // Desbloquear botones formulario5
                    this.botonesHabilitadosForm5 = true;
                    break;
                  case 4:
                    // Desbloquear botones formulario6
                    this.botonesHabilitadosForm6 = true;
                    break;
                  case 5:
                    // Desbloquear botones formulario7
                    this.botonesHabilitadosForm7 = true;
                    break;
                  // Repite para los demás formularios
                  default:
                    break;
                }
              }
            }
  
            // Muestra la alerta si todos los formularios están completos
            if (todosCompletos) {
              Swal.fire({
                icon: "info",
                title: "Formularios Completados",
                text: "Todos los formularios ya han sido completados.",
                allowOutsideClick: false
              });
  
              // Aquí puedes deshabilitar nuevamente los botones según tu lógica, por ejemplo:
              this.botonesHabilitadosForm1 = false;
              this.botonesHabilitadosForm2 = false;
              this.botonesHabilitadosForm3 = false;
              this.botonesHabilitadosForm4 = false;
              this.botonesHabilitadosForm5 = false;
              this.botonesHabilitadosForm6 = false;
              this.botonesHabilitadosForm7 = false;
            }

            // Marca que se ha realizado una búsqueda exitosa
            this.busquedaRealizada = true;
          },
          (error) => {
            console.log(error);
          }
        );
        // this.botonesHabilitados = true; // Habilita los botones
        // this.botonesHabilitadosForm1 = false; // Habilita los botones
      },
      (error) => {
        console.log(error);
        // this.botonesHabilitados = false; // Deja los botones deshabilitados
        // this.botonesHabilitadosForm1 = true; // Deja los botones deshabilitados
        Swal.fire({
          icon: 'error',
          title: 'Paciente no encontrado',
          text: 'El paciente con el número de HC proporcionado no se encuentra registrado.',
          allowOutsideClick: false
        });
      }
    );
    // console.log(this.numero_hc);
  }

  // Función para restablecer todos los botones a su estado por defecto
  restablecerBotones() {
    this.numero_hc = '';  // Limpiar el número de hc
    this.botonesHabilitadosForm1 = true;
    this.botonesHabilitadosForm2 = false;
    this.botonesHabilitadosForm3 = false;
    this.botonesHabilitadosForm4 = false;
    this.botonesHabilitadosForm5 = false;
    this.botonesHabilitadosForm6 = false;
    this.botonesHabilitadosForm7 = false;
    // Deshabilita el botón de reestablecer
    this.busquedaRealizada = false;
  }

  // Funcion para obtener el id del usuario y paciente para luego colocarlos en la url y posteriormente autocompletar los campos requeridos en el html
  ingresarFormulario1() {

    if (this.idPaciente !== null) {
      this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/formulario1/usuario/', res._id]);
        },
        (error) => {
          console.log(error);
        }
      )
    }
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
    // this.router.navigate(['/visualizar-pacientes', ]);

    if (this.idPaciente !== null) {
      this._authService.obtenerUsuarioPorId(this.idUsuario).subscribe(
        (res) => {
          // console.log(res);
          this.router.navigate(['/visualizar-pacientes/usuario/', res._id]);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
}
