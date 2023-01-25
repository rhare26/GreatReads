import {Component, EventEmitter, Output, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import { Book } from "../../models/book";

@Component({
  selector: 'app-show-book-list',
  templateUrl: './show-book-list.component.html',
  styleUrls: ['./show-book-list.component.css']
})
export class ShowBookListComponent {

  selectedBook: Book = new Book;
  editMode:boolean = false;
  addMode:boolean = false;


  @Input() bookList!:Book[];
  @Input() filterFor!:string;

  @Output() onEditBook: EventEmitter<Book> = new EventEmitter();
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();

  constructor(private service:SharedService){}

  ngOnInit(): void{}


  //continue to pass this to grandparent of book-card
  editBook(book: Book) {
    this.onEditBook.emit(book);
  }

  deleteBook(book: Book) {
    if(confirm('Are you sure?')){
      //TODO: filter the deleted book out so you don't have to refresh
      this.service.deleteBook(book).subscribe()
    }
  }
}
