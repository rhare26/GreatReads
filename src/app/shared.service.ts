import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subject} from 'rxjs';

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

  sendUpdatedAuthorListNotification(value:any){
    this.booksSubject.next({text:value})
  }

  getUpdatedAuthorListNotification(){
    return this.booksSubject.asObservable();
  }

  getBookList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.bookUrl);
  }

  addBook(book:any){
    return this.http.post<any[]>(this.APIUrl + this.bookUrl, book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  updateBook(book:any){
    return this.http.patch<any[]>(this.APIUrl + this.bookUrl + book.id + '/', book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + this.bookUrl + bookToDelete.id + '/', bookToDelete).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.authorUrl);
  }

  addAuthor(author:any){
    return this.http.post<any[]>(this.APIUrl + this.authorUrl, author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  updateAuthor(author:any){
    return this.http.patch<any[]>(this.APIUrl + this.authorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  deleteAuthor(author:any){
    return this.http.delete<any[]>(this.APIUrl + this.authorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

}
