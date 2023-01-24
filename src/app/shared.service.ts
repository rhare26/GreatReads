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
    return this.http.get<any[]>(this.APIUrl + '/book/');
  }

  addBook(newBook:any){
    return this.http.post<any[]>(this.APIUrl + '/book/', newBook);
  }

  updateBook(updatedBook:any){
    return this.http.put<any[]>(this.APIUrl + '/book/' + updatedBook.id, updatedBook);
  }

  deleteBook(bookToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/book/' + bookToDelete.id, bookToDelete);
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/author/');
  }

  addAuthor(newAuthor:any){
    return this.http.post<any[]>(this.APIUrl + '/author/', newAuthor);
  }

  updateAuthor(editedAuthor:any){
    return this.http.put<any[]>(this.APIUrl + '/author/' + editedAuthor.id, editedAuthor);
  }

  deleteAuthor(authorToDelete:any){
    return this.http.delete<any[]>(this.APIUrl + '/author/' + authorToDelete.id, authorToDelete);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile', val)
  }
}
