import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BooksPageComponent } from './book/books-page.component'
import { AuthorComponent } from './author/author.component'
import { MyReadComponent } from "./my-read/my-read.component";

const routes: Routes = [
  {path:'book', component:BooksPageComponent},
  {path:'author', component:AuthorComponent},
  {path:'myread', component:MyReadComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
