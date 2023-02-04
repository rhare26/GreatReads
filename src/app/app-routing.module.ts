import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BrowseComponent} from "./browse/browse.component";
import { MyReadListComponent } from "./my-read/my-read-list/my-read-list.component";
import { LoginComponent} from "./login/login.component";
import { AuthGuardService} from 'src/app/services/auth-guard.service'

export const ROUTES: Routes = [
  {path:'login', component:LoginComponent},
  {path:'browse', component:BrowseComponent,
    canActivate: [AuthGuardService]},
  {path:'my-reads', component:MyReadListComponent,
    canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '' },
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
