import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../_services/shared.service";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent {
  author: any;

  constructor(private route: ActivatedRoute, private service: SharedService) {
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('authorId'));

    this.fetchAuthor(bookIdFromRoute)
  }

  fetchAuthor(id: number) {
    this.service.getAuthor(id).subscribe(data => {
      this.author = data;
    });

  }
}
