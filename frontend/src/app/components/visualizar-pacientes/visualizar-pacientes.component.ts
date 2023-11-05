import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formulario2 } from 'src/app/models/formulario2.model';
import { Formulario3 } from 'src/app/models/formulario3.model';
import { Formulario4 } from 'src/app/models/formulario4.model';
import { Formulario5 } from 'src/app/models/formulario5.model';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';
import { PacienteService } from 'src/app/services/paciente.service';
import * as XLSX from 'xlsx';

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
  idPaciente!: any;

  nombreUsuario: string = '';

  public isAdmin: boolean = false;
  public isUser: boolean = false;

  constructor(private _authService: AuthService, private _pacienteService: PacienteService, private aRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.idUsuario = this.aRoute.snapshot.paramMap.get('idUsuario');
    this.idPaciente = this.aRoute.snapshot.paramMap.get('idPaciente');

    if (this.idUsuario !== null) {
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

    this.setRoleState();
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

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (res === 'administrador') {
              this._pacienteService.obtenerPacientesSAForm1(token).subscribe(
                (res) => {
                  console.log(res);
                  this.pacientes = res
                },
                (error) => {
                  console.log(error);
                }
              )
            } else {
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
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  obtenerPacientesForm2(){
    if (this.idUsuario !== null) {

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (this.isAdmin) {
              this._pacienteService.obtenerPacientesSAForm2(token).subscribe(
                (res) => {
                  console.log(res);
                  this.datosf2 = res
                },
                (error) => {
                  console.log(error);
                }
              )
            } else {
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
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  obtenerPacientesForm3(){
    if (this.idUsuario !== null) {

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (this.isAdmin) {
              this._pacienteService.obtenerPacientesSAForm3(token).subscribe(
                (res) => {
                  console.log(res);
                  this.datosf3 = res
                },
                (error) => {
                  console.log(error);
                }
              )
            } else {
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
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  obtenerPacientesForm4(){
    if (this.idUsuario !== null) {

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (this.isAdmin) {
              this._pacienteService.obtenerPacientesSAForm4(token).subscribe(
                (res) => {
                  console.log(res);
                  this.datosf4 = res
                },
                (error) => {
                  console.log(error);
                }
              )
            } else {
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
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  obtenerPacientesForm5(){
    if (this.idUsuario !== null) {

      const token = sessionStorage.getItem('token')
      if (token) {
        this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
          (res) => {
            console.log(res);
            this.isAdmin = res === 'administrador';
            // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
            // * registrados en cada formulario sin restriccion de id de usuario
            if (this.isAdmin) {
              this._pacienteService.obtenerPacientesSAForm5(token).subscribe(
                (res) => {
                  console.log(res);
                  this.datosf5 = res
                },
                (error) => {
                  console.log(error);
                }
              )
            } else {
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
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  // obtenerPacientesForm6(){
  //   if (this.idUsuario !== null) {

  //     const token = sessionStorage.getItem('token')
  //     if (token) {
  //       this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
  //         (res) => {
  //           console.log(res);
  //           this.isAdmin = res === 'administrador';
  //           // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
  //           // * registrados en cada formulario sin restriccion de id de usuario
  //           if (this.isAdmin) {
  //             this._pacienteService.obtenerPacientesSAForm6(token).subscribe(
  //               (res) => {
  //                 console.log(res);
  //                 this.datosf6 = res
  //               },
  //               (error) => {
  //                 console.log(error);
  //               }
  //             )
  //           } else {
  //             this._pacienteService.obtenerPacientesForm6(this.idUsuario).subscribe(
  //               (res) => {
  //                 console.log(res);
  //                 this.datosf6 = res
  //               },
  //               (error) => {
  //                 console.log(error);
  //               }
  //             )
  //           }
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }

  // obtenerPacientesForm7(){
  //   if (this.idUsuario !== null) {

  //     const token = sessionStorage.getItem('token')
  //     if (token) {
  //       this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
  //         (res) => {
  //           console.log(res);
  //           this.isAdmin = res === 'administrador';
  //           // * Si el token le pertenece al administrador, entonces en la tabla mostrara todos los datos de los pacientes
  //           // * registrados en cada formulario sin restriccion de id de usuario
  //           if (this.isAdmin) {
  //             this._pacienteService.obtenerPacientesSAForm7(token).subscribe(
  //               (res) => {
  //                 console.log(res);
  //                 this.datosf7 = res
  //               },
  //               (error) => {
  //                 console.log(error);
  //               }
  //             )
  //           } else {
  //             this._pacienteService.obtenerPacientesForm7(this.idUsuario).subscribe(
  //               (res) => {
  //                 console.log(res);
  //                 this.datosf7 = res
  //               },
  //               (error) => {
  //                 console.log(error);
  //               }
  //             )
  //           }
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }

  /*==================================== EXPORTAR A EXCEL ===================================*/
  exportExcelForm(id: string): void{
    // Busca la tabla por su identificador
    let element = document.getElementById(id);

    if (!element) {
      console.error('Tabla no encontrada');
      return;
    }

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.utils.book_append_sheet(wb, ws, `${id}`);

    // Trae el nombre del usuario para posteriormente colocarlo como nombre en el archivo excel
    const token = sessionStorage.getItem('token')
    if (token) {
      this._authService.obtenerUsuarioDesdeToken(token).subscribe(
        (res) => {
          // Genera un nombre de archivo único para cada formulario (puedes personalizarlo)
          // const fileName = `ExportSheet_${id}.xlsx`;
          const fileName = `${res}_${id}.xlsx`;

          // Guarda el archivo con el nombre único
          XLSX.writeFile(wb, fileName);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // Validacion existe datos en la tabla
  hasData(id: string): boolean {
    let element = document.getElementById(id);
  
    if (!element) {
      return false;
    }
  
    // Verifica si hay elementos <tr> (filas) en la tabla
    const rows = element.getElementsByTagName('tr');
    return rows.length > 1; // Considera que puede haber una fila de encabezado
  }
  /*==================================== EXPORTAR A EXCEL ===================================*/

  /*==================================== VERIFICAR ROL ===================================*/
  private setRoleState() {
    const token = sessionStorage.getItem('token')
    if (token) {
      this._authService.obtenerRolUsuarioDesdeToken(token).subscribe(
        (res) => {
          console.log(res);
          this.isAdmin = res === 'administrador';
          this.isUser = res === 'usuario';
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  /*==================================== VERIFICAR ROL ===================================*/
}
