import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BrowseComponent} from "./browse/browse.component";
import { LoginComponent} from "./user/login/login.component";
import { AuthGuardService} from 'src/app/_services/auth-guard.service'
import {BookDetailComponent} from "./book/book-detail/book-detail.component";
import {AuthorDetailComponent} from "./author/author-detail/author-detail.component";
import {ProfileComponent} from "./profile/profile.component";

export const ROUTES: Routes = [
  {path:'login', component:LoginComponent},
  {path:'browse', component:BrowseComponent,
    canActivate: [AuthGuardService]},
  {path:'profile', component:ProfileComponent,
    canActivate: [AuthGuardService]},
  {path: 'books/:bookId', component: BookDetailComponent,
    canActivate: [AuthGuardService]},
  {path: 'authors/:authorId', component: AuthorDetailComponent,
    canActivate: [AuthGuardService]},
  {path: '**', redirectTo: '' },

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
