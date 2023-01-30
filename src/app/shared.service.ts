import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subject} from 'rxjs';
import {Book} from "./models/book";

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly bookUrl = '/book/'
  readonly authorUrl = '/author/'
  readonly myReadUrl = '/myRead/'

  private booksSubject = new Subject<any>();

  constructor(private http:HttpClient) { }

  sendUpdatedBookListNotification(value:any){
    this.booksSubject.next({text:value})
  }

  getUpdatedBookListNotification(){
    return this.booksSubject.asObservable();
  }

  getBookList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.bookUrl);
  }

  addBook(newBook:any){
    return this.http.post<any[]>(this.APIUrl + this.bookUrl, newBook).pipe(
      map((data=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  updateBook(updatedBook:any){
    let bookWithAuthorAsInt:any = Book.copy(updatedBook)
    bookWithAuthorAsInt.author = bookWithAuthorAsInt.author.id
    return this.http.patch<any[]>(this.APIUrl + this.bookUrl + bookWithAuthorAsInt.id + '/', bookWithAuthorAsInt).pipe(
      map((data=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + this.bookUrl + bookToDelete.id + '/', bookToDelete).pipe(
      map((data=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
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
