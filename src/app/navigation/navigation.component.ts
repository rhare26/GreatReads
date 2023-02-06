import { Component } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {SharedService} from "../_services/shared.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navLinks:any[]= [];
  myReadList:any[]=[];

  constructor(public authService:AuthService, private service:SharedService){}

  ngOnInit(): void{
    this.refreshMyReadList()
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

  refreshMyReadList(){
    this.service.getMyReadList().subscribe(data=>{
      this.myReadList=data;
    });
  }
}
