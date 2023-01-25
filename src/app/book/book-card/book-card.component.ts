import {Component, Input, Output} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input()
  book!: Book;
  @Output() addEditMode:Boolean = false;

  constructor() {}

  ngOnInit(): void{
    this.addEditMode = false;
  }

  editClick(book:Book) {
    this.addEditMode=true;
  }

  deleteClick(book:Book) {

  }
}
