//adapted from https://plainenglish.io/blog/how-to-implement-an-instant-search-functionality-in-angular-e0c0a1e97502

import { Pipe, PipeTransform } from '@angular/core';
import { Book } from "./models/book";

@Pipe({
  name:'search'
})

export class SearchPipe implements PipeTransform {
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
