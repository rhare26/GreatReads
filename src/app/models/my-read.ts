import {Book} from "./book";

export class MyRad{
  id: number=0;
  book: Book = new Book;
  status: string=""
  note: string=""
  dateRead: Date | undefined;
  owned: Boolean=false;
  rating: number | undefined
}
