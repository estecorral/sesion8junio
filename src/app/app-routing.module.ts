import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'peliculasList', component: PeliculasListComponent },
  { path: 'pelicula', component: PeliculaComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
