import { Component } from '@angular/core';
import {AuthService} from "../../_services/auth.service";

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
