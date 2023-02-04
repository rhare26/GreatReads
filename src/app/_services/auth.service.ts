import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, delay, of, Subscription, tap} from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = environment.apiUrl;
  readonly loginUrl = environment.apiUrl + '/login/'
  readonly registerUrl = '/register/'

  tokenSubscription = new Subscription()
  authToken: any;
  user: any;
  private timeout: any;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private http:HttpClient,  private jwtHelper: JwtHelperService, private router:Router) {
    const token = sessionStorage.getItem('auth')
    this._isLoggedIn$.next(!!token);
  }


  login(email:string,password:string){

    return this.http.post<any[]>(this.loginUrl, {email, password}).
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
    // if (token){
    //   this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
    // }
    sessionStorage.setItem("auth", token);
    this.authToken = token;
    //this.emit({ username: this.user.username });
   // this.expirationCounter(this.timeout);
  }

  expirationCounter(timeout:any) {
    const helper = new JwtHelperService();

//     const decodedToken = helper.decodeToken(myRawToken);
//
// // Other functions
//     const expirationDate = helper.getTokenExpirationDate(myRawToken);
//     const isExpired = helper.isTokenExpired(myRawToken);

    // this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
    //   console.log('EXPIRED!!');

      // this.logout();
      //this.router.navigate(["/login"]);

    //});
  }

  logout() {
    console.log("Logging out...")
    this.tokenSubscription.unsubscribe();
    this.authToken = null;
    this.user = null;
    sessionStorage.clear();
    console.log("Current token: ")
    this._isLoggedIn$.next(false) //update log in status
    this.router.navigate([''])
  }
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('auth');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}

export function tokenGetter():string| null{
  if(sessionStorage.getItem('auth') !== null){
    return sessionStorage.getItem('auth');
  }

  return null

}
