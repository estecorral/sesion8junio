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
  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
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
