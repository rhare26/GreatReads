import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent {
  BookList:any=[];
  ModalTitle: string="";
  ActivateAddEditBookComp: boolean=false;
  book: any;

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshBookList();
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.BookList=data;
    });
  }

  addClick() {
    this.book={
      id:0,
      title:"",
      author:"",
      synopsis:""
    }
    this.ModalTitle="Add Book";
    this.ActivateAddEditBookComp=true;
  }

  editClick(book:any) {
    this.book=book;
    this.ModalTitle= "Edit Book";
    this.ActivateAddEditBookComp=true;
  }

  closeClick() {
    this.ActivateAddEditBookComp=false;
    this.refreshBookList();
  }

  deleteClick(book:any) {
    if(confirm('Are you sure?')){
      this.service.deleteBook(book).subscribe(data=>{
          this.refreshBookList()
      })
    }

  }
}
