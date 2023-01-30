import { Component } from '@angular/core';
import { Book } from "../models/book";
import { SharedService } from "../shared.service";

const VIEW:number=1;
const EDIT:number=2;
const ADD:number=3;

@Component({
  selector: 'app-book',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})

export class BooksPageComponent {
  readonly VIEW:number=1;
  readonly EDIT:number=2;
  readonly ADD:number=3;

  selected: Book= new Book;
  list: Book[] = [];
  mode:number = 0;
  searchInput:string = ""

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshBookList();
  }

  edit(book:Book) {
    this.selected = book;
    this.mode=EDIT;
  }

  view(book: Book) {
    this.selected = book;
    this.mode=VIEW;
  }

  // TODO: make add-book component
  add() {
    this.selected = new Book;
    this.mode=ADD;
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.list=data;
    });
  }

}
