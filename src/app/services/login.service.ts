import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  apiURL = "https://api.themoviedb.org/3/authentication/";

  constructor(private httpClient: HttpClient ) {}

  login(userData: any, token) {
   const url = `${this.apiURL}token/validate_with_login?${environment.apiKey}`;
    const body = {
     username: userData.usuario,
     password: userData.password,
     request_token: token
   }
   return this.httpClient.post(url, body);
  }

  getToken() {
    const url = `${this.apiURL}token/new?${environment.apiKey}`;
    return this.httpClient.get(url);
  }

  getSessionId(token) {
    const url = `${this.apiURL}session/new?${environment.apiKey}`;
    return this.httpClient.post(url, { request_token: token });
  }

  logout() {
    localStorage.clear();
  }
}
