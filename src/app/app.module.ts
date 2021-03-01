import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasService } from "./services/peliculas.service";
import { HttpClientModule } from '@angular/common/http';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';
import { FormsModule } from "@angular/forms";
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    PeliculasListComponent,
    PeliculaComponent,
    PuntuacionComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
