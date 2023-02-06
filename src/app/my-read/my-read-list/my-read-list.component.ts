import { Component } from '@angular/core';
import {AddEditBookComponent} from "../../book/add-edit-book/add-edit-book.component";
import {Book} from "../../_models/book";
import {SharedService} from "../../_services/shared.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-my-read-list',
  templateUrl: './my-read-list.component.html',
  styleUrls: ['./my-read-list.component.scss']
})
export class MyReadListComponent {
  myReadList:any
  displayedColumns: string[] = ['status', 'title', 'dateRead', 'rating', 'note', 'owned']
  constructor(private service:SharedService){}


  ngOnInit(): void{
    this.refreshMyReadList();
  }

  ngOnChanges(): void{
    this.refreshMyReadList();
  }

  refreshMyReadList(){
    this.service.getMyReadList().subscribe(data=>{
      this.myReadList=data;
    });
  }


}
