import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculasData: any;
  ordenado = false;
  constructor(private router: Router, private peliculasService: PeliculasService) { 
  }

  ngOnInit() {
    this.peliculasData = this.peliculasService.peliculasTotal;
  }

  sendParams(id, titulo) {
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

  ordenar() {
    if(!this.ordenado) {
      this.peliculasData = this.peliculasService.getMoviesPopularity();
      this.ordenado = true;
    } else {
      this.peliculasData = this.peliculasService.peliculasTotal;
      this.ordenado = false;
    }
  }
}
