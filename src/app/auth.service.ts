import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, delay, of, Subscription, tap} from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = 'http://127.0.0.1:8000/login/';
  readonly loginUrl = '/login/'

  tokenSubscription = new Subscription()
  authToken: any;
  user: any;
  private timeout: any;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService) {
    const token = sessionStorage.getItem('auth')
    this._isLoggedIn$.next(!!token);
  }


  login(email:string,password:string){

    return this.http.post<any[]>(this.APIUrl, {email, password}).
    pipe(
      tap((response:any)=>{
        console.log("Logging in...")
        if(response.tokens.access !== undefined){
          console.log("Log in successful!")
          this.storeUserData(response.tokens.access)
        }

      } )
    )
  }


  storeUserData(token:any) {
    console.log("Logging in. Token: " + token)
    this._isLoggedIn$.next(true) //update log in status
    console.log(this._isLoggedIn$)
    // @ts-ignore
    this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    sessionStorage.setItem("auth", token);
    this.authToken = token;
    //this.emit({ username: this.user.username });
   // this.expirationCounter(this.timeout);
  }

  expirationCounter(timeout:any) {
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
      console.log('EXPIRED!!');

      this.logout();
      //this.router.navigate(["/login"]);

    });
  }

  logout() {
    console.log("Logging out...")
    this.tokenSubscription.unsubscribe();
    this.authToken = null;
    this.user = null;
    sessionStorage.clear();
    console.log("Current token: ")
    //this._isLoggedIn$.next(false) //update log in status
  }




}

export function tokenGetter():string| null{
  if(sessionStorage.getItem('auth') !== null){
    return sessionStorage.getItem('auth');
  }

  return null

}
