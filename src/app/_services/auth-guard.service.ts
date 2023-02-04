import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authService: AuthService, public router: Router) {}
  canActivate(): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login/']);
    }
    return isAuthenticated;
  }
}
