import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroConfirmarComponent } from './components/registro-confirmar/registro-confirmar.component';
import { RegistroReactivoComponent } from './components/registro-reactivo/registro-reactivo.component';
import { RegistroTemplateComponent } from './components/registro-template/registro-template.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'peliculasList', component: PeliculasListComponent },
  { path: 'pelicula', component: PeliculaComponent },
  { path: 'buscar/:query', component: BuscadorComponent },
  { path: 'registro', component: RegistroTemplateComponent },
  { path: 'registroreactivo', component: RegistroReactivoComponent},
  { path: 'registroconfirmar', component: RegistroConfirmarComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
