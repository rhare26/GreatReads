import {Component, Input} from '@angular/core';
import {Author} from "../../_models/author";
import {Subscription} from "rxjs";
import {SharedService} from "../../_services/shared.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEditAuthorComponent} from "../add-edit-author/add-edit-author.component";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent {
  list: Author[] = []
  subscription: Subscription;

  @Input() searchInput!:string

  constructor(private service:SharedService, public dialog: MatDialog){
    this.subscription=this.service.getUpdatedAuthorListNotification().subscribe(list=>{
      if(list)
      {
        this.refreshAuthorList();
      }
    });
  }

  ngOnInit(): void{
    this.refreshAuthorList();
  }

  ngOnChanges(): void{
    this.refreshAuthorList();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  view() {
    // TODO: view author page
  }

  refreshAuthorList(){
    this.service.getAuthorList().subscribe(data=>{
      this.list=data;
    });
  }

  openAddAuthorDialog() {
    // Dialog requires an author for data, create a new one for it to update
    this.dialog.open(AddEditAuthorComponent, {data:{author:new Author, mode:"Add"}});
  }
}

