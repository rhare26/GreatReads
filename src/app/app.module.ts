import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';
import { SearchBooksByTitleAuthor } from './utility/search.pipe'
import { SearchAuthors } from './utility/search.pipe'
import { CardComponent } from './utility/card/card.component';


import { AuthorsListComponent } from './author/authors-list/authors-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { AddEditAuthorComponent } from './author/add-edit-author/add-edit-author.component';

import { BooksListComponent } from './book/books-list/books-list.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { AddEditBookComponent } from './book/add-edit-book/add-edit-book.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
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
import { MatDividerModule } from "@angular/material/divider";
import { LoginComponent } from './login/login.component';
import {MatRadioModule} from "@angular/material/radio";
import {AuthService, tokenGetter} from "./services/auth.service";
import {TokenInterceptor} from "./services/TokenInterceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {environment} from "../environments/environment";
import { LogoutComponent } from './logout/logout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowseComponent } from './browse/browse.component';
import { MyReadComponent } from './my-read/my-read.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddEditBookComponent,
    SearchBooksByTitleAuthor,
    SearchAuthors,
    CardComponent,
    BookCardComponent,
    AuthorsListComponent,
    AuthorCardComponent,
    AddEditAuthorComponent,
    LoginComponent,
    LogoutComponent,
    NavigationComponent,
    BrowseComponent,
    MyReadComponent,
    BookDetailComponent
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
        MatExpansionModule,
        MatDividerModule,
        MatRadioModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: [environment.apiUrl],
            disallowedRoutes: [],
          }
        })
    ],
  providers: [
    SharedService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
