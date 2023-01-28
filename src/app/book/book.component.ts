import { Component } from '@angular/core';
import { Book } from "../models/book";
import { SharedService } from "../shared.service";

const VIEW:number=1;
const EDIT:number=2;
const ADD:number=3;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  readonly VIEW:number=1;
  readonly EDIT:number=2;
  readonly ADD:number=3;
  selectedBook: Book= new Book;
  bookList: Book[] = [];
  mode:number = 0;
  searchInput:string = ""

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshBookList();
  }

  editBook(book:Book) {
    this.selectedBook = book;
    this.mode=EDIT;
  }

  // TODO: make view-book component (this is not connected to anything
  viewBook(book: Book) {
    this.selectedBook = book;
    this.mode=VIEW;
  }

  addBook() {
    this.selectedBook = new Book;
    this.mode=ADD;
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.bookList=data;
    });
  }

}
