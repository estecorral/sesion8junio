import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegistrarService } from "../../services/registrar.service";

@Component({
  selector: 'app-registro-confirmar',
  templateUrl: './registro-confirmar.component.html',
  styleUrls: ['./registro-confirmar.component.css']
})
export class RegistroConfirmarComponent implements OnInit {
  dataRegistro: any;
  constructor( private router: Router, private registrarService: RegistrarService ) { 
    this.getData();
  }

  getData() {
    const data = this.router.getCurrentNavigation().extras.state;
    this.dataRegistro = data.registro;
  }

  sendData() {
    const info = this.registrarService.registrarData(this.dataRegistro);
    console.log(info);
  }

  editar() {
    this.router.navigate(["registroreactivo"], { state: { 'data': this.dataRegistro }});
  }

  ngOnInit() {
  }

}
