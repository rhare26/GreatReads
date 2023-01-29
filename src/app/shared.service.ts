import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/books-list/');
  }

  addBook(newBook:any){
    return this.http.post<any[]>(this.APIUrl + '/books-list/', newBook);
  }

  updateBook(updatedBook:any){
    return this.http.put<any[]>(this.APIUrl + '/book-detail/' + updatedBook.id, updatedBook);
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/book-detail/' + bookToDelete.id, bookToDelete);
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/author-list/');
  }

  addAuthor(newAuthor:any){
    return this.http.post<any[]>(this.APIUrl + '/author-list/', newAuthor);
  }

  updateAuthor(editedAuthor:any){
    return this.http.put<any[]>(this.APIUrl + '/author-detail/' + editedAuthor.id, editedAuthor);
  }

  deleteAuthor(authorToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/author-detail/' + authorToDelete.id, authorToDelete);
  }

}
