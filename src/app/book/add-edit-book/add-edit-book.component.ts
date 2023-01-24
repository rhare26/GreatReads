import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent {
  @Input() book:any
  id:string="";
  title:string="";
  author:any="";
  AuthorList:any=[];

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.loadAuthorList();
    this.id=this.book.id;
    this.title=this.book.title;
    this.author=this.book.author;
  }

  addBook() {
    var newBook = {
      title:this.title,
      author:this.author.id
    };
    this.service.addBook(newBook).subscribe()
  }

  editBook() {
    var editedBook = {
      id:this.id,
      title:this.title,
      author: this.author.id
    };
    this.service.updateBook(editedBook).subscribe()
  }

  loadAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorList=data;
    });

  }
}
