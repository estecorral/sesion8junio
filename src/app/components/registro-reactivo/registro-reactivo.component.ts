import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-registro-reactivo',
  templateUrl: './registro-reactivo.component.html',
  styleUrls: ['./registro-reactivo.component.css']
})
export class RegistroReactivoComponent implements OnInit {
  formularioRegistro: FormGroup;
  paises: any[] = [];
  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService) {
    this.initForm();
   }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises) => {
      this.paises = paises;
    })
  }

  initForm() {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      apellidos: ["", [Validators.required, Validators.minLength(3)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      telefono: ['', [Validators.required, Validators.minLength(9)]],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      nacimiento: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  sendForm() {
    if(this.formularioRegistro.status === 'INVALID') {
      return;
    }
    console.log(this.formularioRegistro.value);
  }

  resetForm() {
   // this.formularioRegistro.reset();
    this.formularioRegistro.setValue({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      pais: '',
      ciudad: '',
      nacimiento: '',
      genero: ''
    });
    console.log(this.formularioRegistro);
   this.formularioRegistro.markAsUntouched();
  }
}
