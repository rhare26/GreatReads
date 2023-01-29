import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!:Book

  @Output() onView: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  edit(book: Book) {
    this.onEdit.emit(book);
  }

  view(book: any) {
    this.onView.emit(book);
  }

  delete(book: any) {
    this.onView.emit(book);
  }

}
