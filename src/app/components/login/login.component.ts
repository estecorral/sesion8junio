import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  constructor( private formBuilder: FormBuilder, private loginService: LoginService,
    private router: Router) { 
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  sendForm() {
    if(this.formularioLogin.status === "INVALID") {
      return;
    }
    // console.log(this.formularioLogin.value);
    this.loginService.login(this.formularioLogin.value);
    this.router.navigate(['']);
  }
}
