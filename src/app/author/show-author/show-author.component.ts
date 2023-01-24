import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'


@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent {
  AuthorList:any=[];
  ModalTitle: string="";
  ActivateAddEditAuthorComp: boolean=false;
  author: any;

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.refreshAuthorList();
  }

  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.AuthorList=data;
    });
  }

  addClick() {

    this.author={
      AuthorId:0,
      AuthorFirstName:"",
      AuthorFLastName:""
    }
    this.ModalTitle="Add Author";
    this.ActivateAddEditAuthorComp=true;
  }

  editClick(a:any) {
    this.author=a;
    this.ModalTitle= "Edit Author";
    this.ActivateAddEditAuthorComp=true;
  }

  closeClick() {
    this.ActivateAddEditAuthorComp=false;
    this.refreshAuthorList();
  }

  deleteClick(a:any) {
    if(confirm('Are you sure?')){
      this.service.deleteAuthor(a.AuthorId).subscribe(data=>{
        this.refreshAuthorList()
      })
    }

  }

}
