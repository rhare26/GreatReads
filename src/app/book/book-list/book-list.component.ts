import {Component, EventEmitter, Output, Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import { Book } from "../../models/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  editMode:boolean = false;
  addMode:boolean = false;


  @Input() list!:Book[];
  @Input() filterFor!:string;

  @Output() onView: EventEmitter<Book> = new EventEmitter();


  constructor(){}

  ngOnInit(): void{}





}
