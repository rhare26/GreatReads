import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  readonly BOOKS = "Books"
  readonly AUTHORS = "Authors"
  mode = this.BOOKS
  searchInput: string ="";
}
