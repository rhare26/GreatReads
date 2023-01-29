import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from "./models/book";

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly bookUrl = '/book/'
  readonly authorUrl = '/author/'
  readonly myReadUrl = '/myRead/'

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.bookUrl);
  }

  addBook(newBook:any){
    return this.http.post<any[]>(this.APIUrl + this.bookUrl, newBook);
  }

  updateBook(updatedBook:any){
    let bookWithAuthorAsInt:any = Book.copy(updatedBook)
    bookWithAuthorAsInt.author = bookWithAuthorAsInt.author.id
    return this.http.patch<any[]>(this.APIUrl + this.bookUrl + bookWithAuthorAsInt.id + '/', bookWithAuthorAsInt);
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + this.bookUrl + bookToDelete.id + '/', bookToDelete);
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.authorUrl);
  }

  addAuthor(newAuthor:any){
    return this.http.post<any[]>(this.APIUrl + this.authorUrl + '/', newAuthor);
  }

  updateAuthor(editedAuthor:any){
    return this.http.patch<any[]>(this.APIUrl + this.authorUrl + editedAuthor.id + '/', editedAuthor);
  }

  deleteAuthor(authorToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + this.authorUrl + authorToDelete.id + '/', authorToDelete);
  }

}
