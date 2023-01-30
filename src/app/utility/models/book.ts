import {Author} from "./author";

// Has default values to create new objects easily
export class Book{
  id: number=0;
  title: string="";
  author: Author = new Author;
  genre:string="";
  synopsis: string="";
  averageRating:number=0;
}
