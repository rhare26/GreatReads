import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Subscription, tap} from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = environment.apiUrl;
  readonly loginUrl = environment.apiUrl + '/login/'
  readonly registerUrl = environment.apiUrl + '/register/'

  tokenSubscription = new Subscription()
  token: any;
  user: any;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService, private router:Router) {
    const token = sessionStorage.getItem('token')
    this._isLoggedIn$.next(!!token);
  }

  register(email:string, username:string, password:string){
    return this.http.post<any[]>(this.registerUrl, {email, username,password})
  }

  login(email:string,password:string){
    return this.http.post<any[]>(this.loginUrl, {email, password}).
    pipe(tap((response:any)=>{
        if(response.tokens.access !== undefined){
          this.storeUserData(response.tokens.access)
        }
      })
    )
  }

  storeUserData(token:any) {
    this._isLoggedIn$.next(true) //update log in status
    sessionStorage.setItem('token', token);
    this.token = token;
  }

  logout() {
    this.tokenSubscription.unsubscribe();
    this.token = null;
    this.user = null;
    sessionStorage.clear();
    this._isLoggedIn$.next(false) //update log in status
    this.router.navigate([''])
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}

export function tokenGetter():string| null{
  if(sessionStorage.getItem('token') !== null){
    return sessionStorage.getItem('token');
  }

  return null

}
