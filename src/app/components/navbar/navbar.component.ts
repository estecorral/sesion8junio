import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value: string = '';
  user: any = {
    name: '',
    email: '',
    sessionId: ''
  };
  isLogged = false;
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    if(localStorage.getItem('session_Id')) {
      this.loginService.logged.next(true);
      this.isLogged = true;
      this.user = JSON.parse(localStorage.getItem("userData"));
    }
    this.loginService.logged.subscribe(res => {
      if(res) {
        this.user = JSON.parse(localStorage.getItem('userData'));
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  buscar() {
    if (this.value === '') {
      return;
    }
    this.route.navigate(['/buscar', this.value]);
  }

  logOut() {
    this.loginService.logout();
  }
}
