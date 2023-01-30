import {Book} from "./book";

// Has default values to create new objects easily
export class Author{
  id: number=0
  firstName: string=""
  lastName:string=""
  books:Book[]=[]
}
