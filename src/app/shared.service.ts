import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/';

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/books/');
  }

  addBook(newBook:any){
    return this.http.post<any[]>(this.APIUrl + '/books/', newBook);
  }

  updateBook(updatedBook:any){
    return this.http.put<any[]>(this.APIUrl + '/books/' + updatedBook.id, updatedBook);
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/books/' + bookToDelete.id, bookToDelete);
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/authors/');
  }

  addAuthor(newAuthor:any){
    return this.http.post<any[]>(this.APIUrl + '/authors/', newAuthor);
  }

  updateAuthor(editedAuthor:any){
    return this.http.put<any[]>(this.APIUrl + '/authors/' + editedAuthor.id, editedAuthor);
  }

  deleteAuthor(authorToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/authors/' + authorToDelete.id, authorToDelete);
  }

}
