import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GreatReads';
  logo ="/assets/images/book.png"
  navLinks:any[]= [];

  constructor() {}
  ngOnInit(): void{
    this.navLinks = [
      {
        label: 'Browse Books',
        link: './browse-books',
        index: 0
      }, {
        label: 'Browse Authors',
        link: './browse-authors',
        index: 1
      }, {
        label: 'My Profile',
        link: './my-profile',
        index: 2
      },
    ];
  }
}
