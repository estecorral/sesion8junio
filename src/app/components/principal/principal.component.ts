import { Component, OnInit } from '@angular/core';
import series from '../../../assets/series.json';
import { ActivatedRoute, Router } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public seriesData: any = series.slice(0, 5);
  peliculasData: any;

  constructor(private router: Router, private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getPolular().subscribe( (data: any) => {
      this.peliculasData = data;
      console.log(data);
    });
  }

  sendParams(id, titulo) {
    this.router.navigate(['/pelicula'], {queryParams: {'id': id, 'titulo': titulo}});
  }

}
