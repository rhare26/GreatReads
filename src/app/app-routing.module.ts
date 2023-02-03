import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BrowseComponent} from "./browse/browse.component";
import {MyReadListComponent} from "./my-read/my-read-list/my-read-list.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'browse', component:BrowseComponent},
  {path:'my-reads', component:MyReadListComponent},
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
