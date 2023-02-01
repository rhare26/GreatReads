import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService:AuthService){}
  logout() {
    this.authService.logout()
  }
}
