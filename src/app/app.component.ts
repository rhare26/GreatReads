import {Component, NgModule} from '@angular/core';
import {AuthService} from "./auth.service";
import {CommonModule} from "@angular/common";

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

  constructor(public authService:AuthService) {}
  ngOnInit(){}
}
