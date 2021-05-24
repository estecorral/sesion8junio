import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userData: any) {
    console.log(userData);
    const user = {
      name: 'Pepito',
      email: 'pepito@gmail.com',
      sessionId: 'ajhfkaf873498ma,bsfhvao'
    }
    localStorage.setItem("userData", JSON.stringify(user))
  }

  logout() {
    localStorage.clear();
  }
}
