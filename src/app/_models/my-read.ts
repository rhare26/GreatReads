import {Book} from "./book";
import {User} from "./user";

// Has default values to create new objects easily
export class MyRead{
  id: number=0;
  user: User = new User;
  book: Book = new Book;
  status: string=""
  note: string=""
  dateRead: Date | undefined;
  owned: Boolean=false;
  rating: number | undefined
}
