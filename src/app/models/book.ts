import {Author} from "./author";

export class Book{
  id: number=0;
  title: string="";
  author: Author = new Author;
  genre:string="";
  synopsis: string="";
  averageRating:number=0;

  static copy(original:any):Book{
    const copy = new Book;

    copy.id = original.id;
    copy.title = original.title;
    copy.author = original.author;
    copy.genre = original.genre;
    copy.synopsis = original.synopsis;
    copy.averageRating = original.averageRating;

    return copy;
  }
}
