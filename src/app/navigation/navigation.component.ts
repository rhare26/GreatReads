import { Component } from '@angular/core';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navLinks:any[]= [];

  constructor(public authService:AuthService){}

  ngOnInit(): void{

    this.navLinks = [
      {
        label: 'Browse',
        link: './browse',
        index: 0
      },  {
        label: 'My Profile',
        link: './profile',
        index: 1
      },
    ];
  }
}
