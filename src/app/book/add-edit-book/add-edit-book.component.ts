import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {Book} from "../../models/book";
import {Author} from "../../models/author";

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent {
  @Input() book!: Book;
  @Input() mode!: string;

  authorList: Author[]=[];
  tempBook: Book = new Book;

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.loadAuthorList();
  }

  ngOnChanges(): void{
    //makes a copy of the inputted book (for add mode, this will be empty)
    this.tempBook = Book.copy(this.book);
  }
  add() {
    this.service.addBook(this.tempBook).subscribe()
  }

  edit() {
    this.service.updateBook(this.tempBook).subscribe()
  }

  loadAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.authorList=data;
    });

  }
}
