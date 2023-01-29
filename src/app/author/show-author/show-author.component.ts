import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import {Book} from "../../models/book";


@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent {

  selectedBook: Book = new Book;
  editMode:boolean = false;
  addMode:boolean = false;


  @Input() bookList!:Book[];
  @Input() filterFor!:string;

  @Output() onViewBook: EventEmitter<Book> = new EventEmitter();
  @Output() onEditBook: EventEmitter<Book> = new EventEmitter();
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();

  constructor(private service:SharedService){}

  ngOnInit(): void{}

  //continue to pass this to grandparent of book-card
  editBook(book: Book) {
    this.onEditBook.emit(book);
  }

  //continue to pass this to grandparent of book-card
  viewBook(book: any) {
    this.onViewBook.emit(book);
  }

  deleteBook(book: Book) {
    if(confirm('Are you sure?')){
      //TODO: filter the deleted book out so you don't have to refresh
      this.service.deleteBook(book).subscribe()
    }
  }


}
