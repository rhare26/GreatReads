import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly loginUrl = '/login/'

  constructor(private http:HttpClient) { }


  login(form:any){
    return this.http.post<any[]>(this.APIUrl + this.loginUrl, form);
  }


}
