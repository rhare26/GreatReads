import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly loginUrl = '/login/'

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()
  constructor(private http:HttpClient) {
    const token = localStorage.getItem('auth')
    this._isLoggedIn$.next(!!token);
  }


  login(form:any){
    return this.http.post<any[]>(this.APIUrl + this.loginUrl, form).pipe(
      tap((response:any)=>{
        if(!!response.tokens){
          this._isLoggedIn$.next(true) //update log in status
          localStorage.setItem('auth', response.tokens.access) //store token in local storage
        }


      })
    )
  }


}
