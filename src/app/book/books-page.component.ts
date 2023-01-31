import {Component, Input} from '@angular/core';
import { Book } from "../utility/models/book";
import { SharedService } from "../shared.service";
import {AddEditBookComponent} from "./add-edit-book/add-edit-book.component";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})

export class BooksPageComponent {
  list: Book[] = []
  subscription: Subscription;

  @Input() searchInput!:string

  constructor(private service:SharedService, public dialog: MatDialog){
    this.subscription=this.service.getUpdatedBookListNotification().subscribe(list=>{
      if(list)
      {
        this.refreshBookList();
      }
    });
  }

  ngOnInit(): void{
    this.refreshBookList();
  }

  ngOnChanges(): void{
    this.refreshBookList();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  view() {
    // TODO: view book page
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.list=data;
    });
  }

  openAddBookDialog() {
    // Dialog requires a book for data, create a new one for it to update
    this.dialog.open(AddEditBookComponent, {data:{book:new Book, mode:"Add"}});
  }

}
