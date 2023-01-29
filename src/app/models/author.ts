import {Book} from "./book";

export class Author{
  id: number=0
  firstName: string=""
  lastName:string=""
  books:Book[]=[]

  toString(){
    return this.firstName + ' ' + this.lastName
  }
}
