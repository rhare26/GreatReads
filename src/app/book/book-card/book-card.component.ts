import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../utility/models/book";
import {AddEditBookComponent} from "../add-edit-book/add-edit-book.component";
import {MatDialog} from "@angular/material/dialog";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!:Book

  @Output() onView: EventEmitter<any> = new EventEmitter();

  constructor(private service: SharedService, public dialog: MatDialog) {}

  view() {
    // TODO: view book
  }

  openEditBookDialog(){
    this.dialog.open(AddEditBookComponent, {data:{book:this.book, mode:"Edit"}});
  }

  delete() {
    if(confirm('Are you sure?')){
      this.service.deleteBook(this.book).subscribe()
    }
  }
}
