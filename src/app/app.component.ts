import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreatReads';
  navLinks:any[]= [];

  constructor() {}
  ngOnInit(): void{
    this.navLinks = [
      {
        label: 'All Books',
        link: './book',
        index: 0
      }, {
        label: 'All Authors',
        link: './author',
        index: 1
      }, {
        label: 'My Reads',
        link: './myread',
        index: 2
      },
    ];
  }
}
