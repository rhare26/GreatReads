import { Component } from '@angular/core';
import {SharedService} from "../shared.service";
import {Author} from "../models/author";

const VIEW:number=1;
const EDIT:number=2;
const ADD:number=3;

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  readonly VIEW:number=1;
  readonly EDIT:number=2;
  readonly ADD:number=3;

  selected: Author= new Author;
  list: Author[] = [];
  mode:number = 0;
  searchInput:string = ""

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshAuthorList();
  }

  edit(author:Author) {
    this.selected = author;
    this.mode=EDIT;
  }

  view(author:Author) {
    this.selected = author;
    this.mode=VIEW;
  }

  add() {
    this.selected = new Author;
    this.mode=ADD;
  }

  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.list=data;
    });
  }

}


