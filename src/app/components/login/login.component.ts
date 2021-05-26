import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  constructor( private formBuilder: FormBuilder, private loginService: LoginService,
    private router: Router, private snackBar: MatSnackBar) { 
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
    const user = {
      name: this.formularioLogin.value.usuario,
    }
    this.loginService.getToken().subscribe((res: any) => {
      if(res.success) {
        this.loginService.login(this.formularioLogin.value, res.request_token).subscribe((res: any) => {
          if (res.success) {
            this.loginService.getSessionId(res.request_token).subscribe((res: any) => {
              if(res.success) {
                localStorage.setItem("userData", JSON.stringify(user));
                localStorage.setItem("session_Id", res.session_id);
              }
            });
          } else {
            this.snackBar.open('Usuario y/o contraseña incorrectos');
            return;
          }
        });
      } else {
        console.log('ERROR');
      }
    });
    this.router.navigate(['']);
  }
}
