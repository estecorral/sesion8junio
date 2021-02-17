import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasListComponent } from './component/peliculas-list/peliculas-list.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path:'peliculasList', component: PeliculasListComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
