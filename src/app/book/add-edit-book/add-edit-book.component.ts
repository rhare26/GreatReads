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
  @Input()
  book!: Book;
  id:number=0;
  title:string="";
  author:any="";
  AuthorList:Author[]=[];

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.loadAuthorList();
    this.id=this.book.id;
    this.title=this.book.title;
    this.author=this.book.author;
  }

  addBook() {
    var newBook:Book = new Book
    this.service.addBook(newBook).subscribe()
  }

  editBook() {
    var editedBook:Book = {
      id:this.id,
      title:this.title,
      author: this.author.id,
      averageRating: 0,
      genre: "",
      synopsis: "",
    };
    this.service.updateBook(editedBook).subscribe()
  }

  loadAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorList=data;
    });

  }
}
