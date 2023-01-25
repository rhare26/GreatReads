import { Component } from '@angular/core';
import { Book } from "../models/book";
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  selectedBook: Book= new Book;
  bookList: Book[] = [];
  addMode:boolean = false;
  editMode:boolean = false;
  searchInput: string = "";

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshBookList();
  }

  editBook(book:Book) {
    this.selectedBook = book;
    this.addMode = false;
    this.editMode = false;
    this.editMode = true;
  }

  addBook() {
    this.selectedBook = new Book;
    this.editMode = false;
    this.addMode = true;
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.bookList=data;
    });
  }

}
