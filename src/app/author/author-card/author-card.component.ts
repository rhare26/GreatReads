import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedService} from "../../shared.service";
import {MatDialog} from "@angular/material/dialog";
import {Author} from "../../utility/models/author";
import {AddEditAuthorComponent} from "../add-edit-author/add-edit-author.component";

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent {
  @Input() author!:Author

  @Output() onView: EventEmitter<any> = new EventEmitter();

  constructor(private service: SharedService, public dialog: MatDialog) {}

  view() {
    // TODO: view author
  }

  openEditAuthorDialog(){
    this.dialog.open(AddEditAuthorComponent, {data:{author:this.author, mode:"Edit"}});
  }

  delete() {
    if(confirm('Are you sure?')){
      this.service.deleteAuthor(this.author).subscribe()
    }
  }
}
