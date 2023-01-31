import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  readonly BOOKS = "Books"
  readonly AUTHORS = "Authors"

  title = 'GreatReads';
  logo ="/assets/images/book.png"
  mode = this.BOOKS
  searchInput: string ="";

  constructor() {}
  ngOnInit(){}
}
