import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from "../../_services/shared.service";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book: any;
  reviews: any;
  constructor(private route:ActivatedRoute, private service:SharedService) {

  }
  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));

    this.fetchBook(bookIdFromRoute)
    this.fetchReviews()
  }

  fetchBook(id:number){
    this.service.getBook(id).subscribe(data=>{
      this.book=data;
    });
  }
  fetchReviews(){
    this.service.getMyReadList().subscribe(data=>{
      this.reviews=data;
    });
  }
}
