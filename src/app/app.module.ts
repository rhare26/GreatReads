import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyReadComponent } from './my-read/my-read/my-read.component';
import { ViewMyReadComponent } from './my-read/view-my-read/view-my-read.component';
import { AddEditMyReadComponent } from './my-read/add-edit-my-read/add-edit-my-read.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    ShowBookComponent,
    AddEditBookComponent,
    AddEditAuthorComponent,
    ShowAuthorComponent,
    MyReadComponent,
    ViewMyReadComponent,
    AddEditMyReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
