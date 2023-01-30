import {Component, EventEmitter, Output, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import { Book } from "../../models/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  editMode:boolean = false;
  addMode:boolean = false;


  @Input() list!:Book[];
  @Input() filterFor!:string;

  @Output() onView: EventEmitter<Book> = new EventEmitter();
  @Output() onEdit: EventEmitter<Book> = new EventEmitter();
  @Output() onAdd: EventEmitter<Book> = new EventEmitter();

  constructor(private service:SharedService){}

  ngOnInit(): void{}

  //continue to pass this to grandparent of book-card
  edit(book: Book) {
    this.onEdit.emit(book);
  }

  //continue to pass this to grandparent of book-card
  view(book: any) {
    this.onView.emit(book);
  }

  delete(book: Book) {
    if(confirm('Are you sure?')){
      //TODO: filter the deleted book out so you don't have to refresh
      this.service.deleteBook(book).subscribe()
    }
  }


}