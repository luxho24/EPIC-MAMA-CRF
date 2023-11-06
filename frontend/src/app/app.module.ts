import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';
import { Formulario4Component } from './components/formulario4/formulario4.component';
import { Formulario5Component } from './components/formulario5/formulario5.component';
import { Formulario6Component } from './components/formulario6/formulario6.component';
import { Formulario7Component } from './components/formulario7/formulario7.component';
import { VisualizarPacientesComponent } from './components/visualizar-pacientes/visualizar-pacientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Formulario1Component,
    Formulario2Component,
    Formulario3Component,
    Formulario4Component,
    Formulario5Component,
    Formulario6Component,
    Formulario7Component,
    MenuComponent,
    VisualizarPacientesComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
