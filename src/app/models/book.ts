import {Author} from "./author";

export class Book{
  id: number=0;
  title: string="";
  author: Author = new Author;
  genre:string="";
  synopsis: string="";
  averageRating:number=0;

}
