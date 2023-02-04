import {Book} from "./book";

// Has default values to create new objects easily
export class Author{
  id: number=0
  image: string=""
  firstName: string=""
  lastName:string=""
  bio:string=""
  books:Book[]=[]
}
