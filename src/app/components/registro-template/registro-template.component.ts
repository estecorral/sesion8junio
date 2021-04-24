import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PaisesService } from "src/app/services/paises.service";

@Component({
  selector: 'app-registro-template',
  templateUrl: './registro-template.component.html',
  styleUrls: ['./registro-template.component.css']
})
export class RegistroTemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  }

  ciudades = ['Ponferrada', 'León', 'Astorga', 'Bembibre', 'Cacabelos'];

  paises: any[] = [];

  constructor( private paisesService: PaisesService ) { }

  ngOnInit() {
    this.paisesService.getPaises().subscribe( paises => {
      this.paises = paises;
      console.log(paises);
    });
  }

  send( form: NgForm ) {
    if(form.invalid) {
      console.log('Formulario no válido');
      return;
    }
    console.log(form.value);
  }
}
