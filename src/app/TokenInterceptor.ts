import { Injectable } from '@angular/core';
  import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';


import {Observable} from "rxjs";
import {AuthService, tokenGetter} from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (tokenGetter() !== null){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenGetter()}`
        }
      });
    }


    return next.handle(request);
  }
}
