import { Component, OnInit } from '@angular/core';
import peliculas from '../../../assets/movies.json';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {
  peliculasData: any;
  constructor() { 
    this.peliculasData = peliculas;
  }

  ngOnInit() {
  }

}
