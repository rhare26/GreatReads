import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { MyReadComponent } from "./my-read/my-read.component";
import { AddEditMyReadComponent } from './my-read/add-edit-my-read/add-edit-my-read.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowMyReadComponent } from './my-read/show-my-read/show-my-read.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
    AddEditMyReadComponent,
    ShowMyReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
