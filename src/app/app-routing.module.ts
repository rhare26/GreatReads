import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { BooksPageComponent } from './book/books-page.component'
import { AuthorsPageComponent } from "./author/authors-page.component";

const routes: Routes = [
  {path:'browse-books', component:BooksPageComponent},
  {path:'browse-authors', component:AuthorsPageComponent},
  //{path:'my-profile', component:MyReadComponent}
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
