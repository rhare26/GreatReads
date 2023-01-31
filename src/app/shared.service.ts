import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly getBookUrl = '/get-book/'
  readonly getAuthorUrl = '/get-author/'
  readonly getMyReadUrl = '/get-myRead/'
  readonly editBookUrl = '/edit-book/'
  readonly editAuthorUrl = '/edit-author/'
  readonly editMyReadUrl = '/edit-myRead/'

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
    return this.http.get<any[]>(this.APIUrl + this.getBookUrl);
  }

  addBook(book:any){
    return this.http.post<any[]>(this.APIUrl + this.editBookUrl, book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  updateBook(book:any){
    return this.http.patch<any[]>(this.APIUrl + this.editBookUrl + book.id + '/', book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  deleteBook(book:any){
    return this.http.delete<any[]>(this.APIUrl + this.editBookUrl + book.id + '/', book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + this.getAuthorUrl);
  }

  addAuthor(author:any){
    return this.http.post<any[]>(this.APIUrl + this.editAuthorUrl, author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  updateAuthor(author:any){
    return this.http.patch<any[]>(this.APIUrl + this.editAuthorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  deleteAuthor(author:any){
    return this.http.delete<any[]>(this.APIUrl + this.editAuthorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

}
