import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() onViewBook: EventEmitter<Book> = new EventEmitter();
  @Output() onEditBook: EventEmitter<Book> = new EventEmitter();
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();

  constructor() {}

  ngOnInit(): void{}

  //starts to pass this to grandparent of book-card
  editClick() {
    this.onEditBook.emit(this.book);
  }
  //passes this to parent of book-card
  deleteClick() {
    this.onDeleteBook.emit(this.book);
  }
  //starts to pass this to grandparent of book-card
  viewClick() {
    this.onViewBook.emit(this.book);
  }
}
