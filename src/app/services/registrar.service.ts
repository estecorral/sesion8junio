import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private httpClient: HttpClient) { }

  registrarData(data: any) {
    return 'Ok';
  } 
}
