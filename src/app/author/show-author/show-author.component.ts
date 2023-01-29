import {Component, EventEmitter, Input, Output} from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import {Author} from "../../models/author";


@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent {

  editMode:boolean = false;
  addMode:boolean = false;

  @Input() list!:Author[];
  @Input() filterFor!:string;

  @Output() onView: EventEmitter<Author> = new EventEmitter();
  @Output() onEdit: EventEmitter<Author> = new EventEmitter();
  @Output() onAdd: EventEmitter<Author> = new EventEmitter();

  constructor(private service:SharedService){}

  ngOnInit(): void{}

  //continue to pass this to grandparent of book-card
  edit(author: Author) {
    this.onEdit.emit(author);
  }

  //continue to pass this to grandparent of book-card
  view(author: any) {
    this.onView.emit(author);
  }

  delete(author: Author) {
    if(confirm('Are you sure?')){
      //TODO: filter the deleted book out so you don't have to refresh
      this.service.deleteAuthor(author).subscribe()
    }
  }

}
