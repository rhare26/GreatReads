import { Component } from '@angular/core';
import {Book} from "../models/book";
import {SharedService} from "../shared.service";

const VIEW:number=1;
const EDIT:number=2;
const ADD:number=3;

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
}

