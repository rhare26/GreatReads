import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../models/book";
import {AddEditBookComponent} from "../add-edit-book/add-edit-book.component";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!:Book

  @Output() onView: EventEmitter<any> = new EventEmitter();

  constructor(private service: SharedService, public dialog: MatDialog) {}

  view(book: any) {
    this.onView.emit(book);
  }

  openEditBookDialog(){
    this.dialog.open(AddEditBookComponent, {data:{book:this.book, mode:"Edit"}});
  }

  delete(book: Book) {
    if(confirm('Are you sure?')){
      //TODO: filter the deleted book out so you don't have to refresh
      this.service.deleteBook(book).subscribe()
    }
  }
}
