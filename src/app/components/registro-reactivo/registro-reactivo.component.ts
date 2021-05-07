import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaisesService } from 'src/app/services/paises.service';
import { Router } from "@angular/router";
@Component({
  selector: "app-registro-reactivo",
  templateUrl: "./registro-reactivo.component.html",
  styleUrls: ["./registro-reactivo.component.css"],
})
export class RegistroReactivoComponent implements OnInit {
  formularioRegistro: FormGroup;
  paises: any[] = [];
  registro = {
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    pais: "",
    ciudad: "",
    direccion: {
      calle:"",
      numero: ""
    },
    nacimiento: "",
    genero: "",
  };
  verForm: boolean = true;
  date = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisesService,
    private router: Router
  ) {
    this.getData();
    this.initForm();
  }

  ngOnInit() {
    this.paisesService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  getData() {
    if (this.router.getCurrentNavigation().extras.state) {
      const data = this.router.getCurrentNavigation().extras.state;
      this.registro = data.data;
      console.log(this.registro);
    }
  }

  initForm() {
    this.formularioRegistro = this.formBuilder.group({
      nombre: [this.registro.nombre, [Validators.required, Validators.minLength(3)]],
      apellidos: [this.registro.apellidos, [Validators.required, Validators.minLength(3)]],
      email: [
        this.registro.email,
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      telefono: [this.registro.telefono, [Validators.required, Validators.minLength(9)]],
      pais: [this.registro.pais, Validators.required],
      ciudad: [this.registro.ciudad, Validators.required],
      direccion: this.formBuilder.group({
        calle: [this.registro.direccion.calle, Validators.required],
        numero: [this.registro.direccion.numero, Validators.required],
      }),
      nacimiento: [this.registro.nacimiento, Validators.required],
      genero: [this.registro.genero, Validators.required],
    });
  }

  sendForm() {
    if (this.formularioRegistro.status === "INVALID") {
      return;
    }
    console.log(this.formularioRegistro.value);
    this.registro = this.formularioRegistro.value;
    this.router.navigate(["registroconfirmar"], {
      state: { registro: this.registro },
    });
    // this.verForm = false;
  }

  sendData() {
    console.log(this.registro);
  }

  editar() {
    this.verForm = true;
  }

  resetForm() {
    this.formularioRegistro.reset();
    /* this.formularioRegistro.setValue({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      pais: '',
      ciudad: '',
      nacimiento: '',
      genero: ''
    });*/
    console.log(this.formularioRegistro);
    this.formularioRegistro.markAsUntouched();
  }
}
