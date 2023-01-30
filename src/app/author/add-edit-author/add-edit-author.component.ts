import {Component, Inject} from '@angular/core';
import {Author} from "../../utility/models/author";
import {SharedService} from "../../shared.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Book} from "../../utility/models/book";

@Component({
  selector: 'app-add-edit-author',
  templateUrl: './add-edit-author.component.html',
  styleUrls: ['./add-edit-author.component.scss']
})
export class AddEditAuthorComponent {
  tempAuthor?:any;

  constructor(private service:SharedService, @Inject(MAT_DIALOG_DATA) public data: {author: Author, mode:string}){}

  ngOnInit(): void{
    //makes a copy of the inputted book (for add mode, this will be empty)
    this.tempAuthor = JSON.parse(JSON.stringify(this.data.author));

  }

  addOrUpdate() {
    // Primary key will be zero if a blank/new book was injected
    if(this.data.author.id==0){
      this.service.addAuthor(this.tempAuthor).subscribe()
    }

    else{
      this.service.updateAuthor(this.tempAuthor).subscribe()
    }
  }
}
