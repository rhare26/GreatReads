import {Component, Inject} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {Book} from "../../models/book";
import {Author} from "../../models/author";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})

export class AddEditBookComponent {
  authorList: Author[]=[];
  tempBook: Book = new Book;


  constructor(private service:SharedService, @Inject(MAT_DIALOG_DATA) public data: {book: Book, mode:string}){}

  ngOnInit(): void{
    this.loadAuthorList();
    //makes a copy of the inputted book (for add mode, this will be empty)
    this.tempBook = Book.copy(this.data.book);
  }

  loadAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.authorList=data;
    });

  }

  addOrUpdate() {
    // Primary key will be zero if a blank, new book was injected
    if(this.data.book.id==0){
      this.service.addBook(this.tempBook).subscribe()
    }

    else{
      this.service.updateBook(this.tempBook).subscribe()
    }

  }
}
