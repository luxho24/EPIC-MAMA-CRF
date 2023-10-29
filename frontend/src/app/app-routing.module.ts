import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';
import { Formulario4Component } from './components/formulario4/formulario4.component';
import { Formulario5Component } from './components/formulario5/formulario5.component';
import { Formulario6Component } from './components/formulario6/formulario6.component';
import { Formulario7Component } from './components/formulario7/formulario7.component';
import { AuthGuard } from './guards/auth.guard';
import { VisualizarPacientesComponent } from './components/visualizar-pacientes/visualizar-pacientes.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  // {path: "menu", component: MenuComponent, canActivate: [AuthGuard]},
  {path: "menu/usuario/:idUsuario", component: MenuComponent, canActivate: [AuthGuard]},
  {path: "menu/usuario/:idUsuario/paciente/:idPaciente", component: MenuComponent, canActivate: [AuthGuard]},
  {path: "visualizar-pacientes/usuario/:idUsuario", component: VisualizarPacientesComponent, canActivate: [AuthGuard]},
  // {path: "formulario1", component: Formulario1Component, canActivate: [AuthGuard]},
  {path: "formulario1/usuario/:idUsuario", component: Formulario1Component, canActivate: [AuthGuard]},
  {path: "formulario2/usuario/:idUsuario/paciente/:idPaciente", component: Formulario2Component, canActivate: [AuthGuard]},
  // {path: "formulario2", component: Formulario2Component, canActivate: [AuthGuard]},
  {path: "formulario3/usuario/:idUsuario/paciente/:idPaciente", component: Formulario3Component, canActivate: [AuthGuard]},
  {path: "formulario4/usuario/:idUsuario/paciente/:idPaciente", component: Formulario4Component, canActivate: [AuthGuard]},
  {path: "formulario5/usuario/:idUsuario/paciente/:idPaciente", component: Formulario5Component, canActivate: [AuthGuard]},
  {path: "formulario6/usuario/:idUsuario/paciente/:idPaciente", component: Formulario6Component, canActivate: [AuthGuard]},
  {path: "formulario7/usuario/:idUsuario/paciente/:idPaciente", component: Formulario7Component, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
