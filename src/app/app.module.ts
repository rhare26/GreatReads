import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksPageComponent } from './book/books-page.component';
import { AuthorComponent } from './author/author.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';
import { ShowAuthorComponent } from './author/show-author/show-author.component';
import { MyReadComponent } from "./my-read/my-read.component";
import { AddEditMyReadComponent } from './my-read/add-edit-my-read/add-edit-my-read.component';
import { SharedService } from './shared.service';
import { SearchBooks } from './search.pipe'
import { SearchAuthors } from './search.pipe'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowMyReadComponent } from './my-read/show-my-read/show-my-read.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { CardComponent } from './card/card.component';
import { BookCardComponent } from './book/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    AuthorComponent,
    BookListComponent,
    AddEditBookComponent,
    AddEditAuthorComponent,
    ShowAuthorComponent,
    MyReadComponent,
    AddEditMyReadComponent,
    ShowMyReadComponent,
    SearchBooks,
    SearchAuthors,
    CardComponent,
    BookCardComponent
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
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatTableModule,
        MatDialogModule,
        MatSidenavModule,
        MatExpansionModule
    ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
