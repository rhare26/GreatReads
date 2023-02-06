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

  private _currentUserId$ = new BehaviorSubject<number>(0)
  currentUserId$ = this._currentUserId$.asObservable()

  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService, private router:Router) {
    const token = sessionStorage.getItem('token')
    this._isLoggedIn$.next(!!token);

    const userId = Number(sessionStorage.getItem('userId'))
    this._currentUserId$.next(userId);
  }

  register(email:string, username:string, password:string){
    return this.http.post<any[]>(this.registerUrl, {email, username,password})
  }

  login(email:string,password:string){
    return this.http.post<any[]>(this.loginUrl, {email, password}).
    pipe(tap((response:any)=>{
        if(response.tokens.access !== undefined){
          this.storeUserData(response)
        }
      })
    )
  }

  storeUserData(response:any) {
    this.token = response.tokens.access
    sessionStorage.setItem('token', this.token);

    const id = response.userId
    sessionStorage.setItem('userId', id)
    this._currentUserId$.next(id)

    this._isLoggedIn$.next(true)
  }


  logout() {
    this.tokenSubscription.unsubscribe();
    this.token = null;
    this.user = null;
    sessionStorage.clear();
    this._isLoggedIn$.next(false)
    this._currentUserId$.next(0)
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
