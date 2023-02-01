import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BrowseComponent} from "./browse/browse.component";
import {MyReadComponent} from "./my-read/my-read.component";

const routes: Routes = [
  {path:'browse', component:BrowseComponent},
  {path:'my-reads', component:MyReadComponent},
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
