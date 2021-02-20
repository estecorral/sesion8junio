import { Injectable } from '@angular/core';
import peliculas from '../../assets/movies.json';
import peliculasSort from "../../assets/movies.json";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculasTotal = peliculas;
  peliculasOrdenadas = peliculas.slice();
  pelicula: any;

  constructor() { }

  getPolular() {
    return peliculas.slice(0, 5);
  }

  getMoviesPopularity(){
   return this.peliculasOrdenadas.sort( (a, b) => {
      if (a.vote_average > b.vote_average ) {
        return -1;
      }
      if ( a.vote_average < b.vote_average ) {
        return 1;
      }
      return 0;
    });
  }

  getPelicula(id) {
    return this.peliculasTotal.filter((res) => {
      let idPelNum = +id;
      if (res.id === idPelNum) {
        return res;
      }
    });
  }
}
