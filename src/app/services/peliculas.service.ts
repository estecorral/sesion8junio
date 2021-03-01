import { Injectable } from '@angular/core';
import peliculas from '../../assets/movies.json';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class PeliculasService {
  peliculasTotal = peliculas;
  peliculasOrdenadas = peliculas.slice();
  pelicula: any;
  apiURL = "https://api.themoviedb.org/3/movie/";
  language = 'es-ES';

  constructor(private httpClient: HttpClient) {}

  getPolular() {
    // return peliculas.slice(0, 5);
    const url = `${this.apiURL}popular?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(map((data: any) =>{
      return data.results.slice(0, 5);
    }));
  }

  getTopRated(page?) {
    if(page) {
      const url = `${this.apiURL}top_rated?${environment.apiKey}&language=${this.language}&page=${page}`;
      return this.httpClient.get(url).pipe(
        map((data: any) => {
          return data.results;
        })
      );
    } else {
      const url = `${this.apiURL}top_rated?${environment.apiKey}&language=${this.language}`;
      return this.httpClient.get(url);
    }
  }

  getMoviesPopularity() {
    return this.peliculasOrdenadas.sort((a, b) => {
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      return 0;
    });
  }

  getPelicula(id) {
    const url = `${this.apiURL}${id}?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url);
  }

  getCredits(id) {
    const url = `${this.apiURL}${id}/credits?${environment.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(
      map((res:any) => {
      return res.cast;
    }));
  }

  searchMovie(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?${environment.apiKey}&language=${this.language}&query=${query}`;
    return this.httpClient.get(url);
  }
}
