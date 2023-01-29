import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.css']
})
export class AddEditAuthorComponent {
  @Input() author:any
  @Input() mode:any
  id:string="";
  firstName:string="";
  lastName:string="";

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.id=this.author.id;
    this.firstName=this.author.firstName;
    this.lastName=this.author.lastName;
  }

  addAuthor() {
    var newAuthor = {
      id:this.id,
      firstName:this.firstName,
      lastName:this.lastName
    };
    this.service.addAuthor(newAuthor).subscribe()
  }

  editAuthor() {
    var editedAuthor = {
      id:this.id,
      firstName:this.firstName,
      lastName:this.lastName
    };
    this.service.updateAuthor(editedAuthor).subscribe()
  }
}

