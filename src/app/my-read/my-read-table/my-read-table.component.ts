import { Component } from '@angular/core';
import {SharedService} from "../../_services/shared.service";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-my-read-table',
  templateUrl: './my-read-table.component.html',
  styleUrls: ['./my-read-table.component.scss']
})
export class MyReadTableComponent {
  myReadList:any=[]
  displayedColumns: string[] = ['status', 'title', 'dateRead', 'rating', 'note', 'owned']


  constructor(private service:SharedService, public authService:AuthService){}

  ngOnInit(): void{
    this.refreshMyReadList();
  }

  refreshMyReadList(){
    this.service.getMyReadList().subscribe(data=>{
      this.myReadList=data;
    });
  }

}
