import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subject} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = environment.apiUrl;

  readonly getBookUrl = this.APIUrl + '/get-book/'
  readonly getAuthorUrl = this.APIUrl + '/get-author/'
  readonly getMyReadUrl = this.APIUrl + '/get-myread/'

  readonly editBookUrl = this.APIUrl + '/edit-book/'
  readonly editAuthorUrl = this.APIUrl + '/edit-author/'
  readonly editMyReadUrl = this.APIUrl + '/edit-myread/'

  private booksSubject = new Subject<any>();

  constructor(private http:HttpClient) { }

  /************************SUBJECTS************************/
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

  /************************BOOKS************************/
  getBookList():Observable<any[]>{

    return this.http.get<any[]>(this.getBookUrl);
  }

  getBook(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.getBookUrl + id);
  }

  addBook(book:any){
    return this.http.post<any[]>(this.editBookUrl, book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  updateBook(book:any){
    return this.http.patch<any[]>(this.editBookUrl + book.id + '/', book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  deleteBook(book:any){
    return this.http.delete<any[]>(this.editBookUrl + book.id + '/', book).pipe(
      map((()=>{
        this.sendUpdatedBookListNotification(true);
      }))
    );
  }

  /************************AUTHORS************************/
  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.getAuthorUrl);
  }

  getAuthor(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.getAuthorUrl + id);
  }

  addAuthor(author:any){
    return this.http.post<any[]>(this.editAuthorUrl, author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  updateAuthor(author:any){
    return this.http.patch<any[]>(this.editAuthorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  deleteAuthor(author:any){
    return this.http.delete<any[]>(this.editAuthorUrl + author.id + '/', author).pipe(
      map((()=>{
        this.sendUpdatedAuthorListNotification(true);
      }))
    );
  }

  /************************MY READS************************/
  getMyReadList():Observable<any[]>{
    return this.http.get<any[]>(this.getMyReadUrl);
  }

  getMyRead(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.getMyReadUrl + id);
  }

  addMyRead(myRead:any){
    return this.http.post<any[]>(this.editMyReadUrl, myRead)
  }

  updateMyRead(myRead:any){
    return this.http.patch<any[]>(this.editMyReadUrl + myRead.id + '/', myRead)
  }

  deleteMyRead(myRead:any){
    return this.http.delete<any[]>(this.editMyReadUrl + myRead.id + '/', myRead)
  }
}
