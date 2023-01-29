//adapted from https://plainenglish.io/blog/how-to-implement-an-instant-search-functionality-in-angular-e0c0a1e97502

import { Pipe, PipeTransform } from '@angular/core';
import { Book } from "./models/book";
import {Author} from "./models/author";

@Pipe({
  name:'searchBooks'
})

export class SearchBooks implements PipeTransform {
  transform(books: Book[], searchInput: string): any[]{
    if(!searchInput) {
      return books;
    }

    searchInput = searchInput.toLowerCase();
    return books.filter(
      b => b.title.toLowerCase().includes(searchInput) ||
        b.author.firstName.toLowerCase().includes(searchInput) ||
        b.author.lastName.toLowerCase().includes(searchInput)
    )

  }
}

@Pipe({
  name:'searchAuthors'
})

export class SearchAuthors implements PipeTransform {
  transform(authors: Author[], searchInput: string): any[]{
    if(!searchInput) {
      return authors;
    }

    searchInput = searchInput.toLowerCase();
    return authors.filter(
      a =>a.firstName.toLowerCase().includes(searchInput) ||
        a.lastName.toLowerCase().includes(searchInput)
    )

  }
}
