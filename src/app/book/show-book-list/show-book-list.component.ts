import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import {Book} from "../../models/book";

@Component({
  selector: 'app-show-book-list',
  templateUrl: './show-book-list.component.html',
  styleUrls: ['./show-book-list.component.css']
})
export class ShowBookListComponent {
  BookList:Book[]=[];
  ModalTitle: string="";
  addEditMode: boolean=false;
  selectedBook: Book = new Book;

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshBookList();
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.BookList=data;
    });
  }

  addClick() {
    this.selectedBook = new Book;
    this.ModalTitle = "Add Book";
    this.addEditMode = true;
  }

  editClick(book:any) {
    this.selectedBook = book;
    this.ModalTitle = "Edit Book";
    this.addEditMode = true;
  }

  closeClick() {
    this.addEditMode=false;
    this.refreshBookList();
  }

  deleteClick(book:Book) {
    if(confirm('Are you sure?')){
      this.service.deleteBook(book).subscribe(data=>{
          this.refreshBookList()
      })
    }

  }
}
