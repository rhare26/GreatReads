//adapted from https://plainenglish.io/blog/how-to-implement-an-instant-search-functionality-in-angular-e0c0a1e97502

import { Pipe, PipeTransform } from '@angular/core';
import { Book } from "src/app/_models/book";
import { Author } from "src/app/_models/author";
import {MyRead} from "../_models/my-read";

@Pipe({
  name:'SearchBooksByTitleAuthor'
})

export class SearchBooksByTitleAuthor implements PipeTransform {
  transform(books: Book[], searchInput: string): any[]{
    if(!searchInput) {
      return books;
    }

    searchInput = searchInput.toLowerCase();
    return books.filter(
      book => book.title.toLowerCase().includes(searchInput) ||
        book.author.firstName.toLowerCase().includes(searchInput) ||
        book.author.lastName.toLowerCase().includes(searchInput)
    )

  }
}

@Pipe({
  name:'SearchAuthorsByName'
})

export class SearchAuthorsByName implements PipeTransform {
  transform(authors: Author[], searchInput: string): any[]{
    if(!searchInput) {
      return authors;
    }

    searchInput = searchInput.toLowerCase();
    return authors.filter(
      author =>author.firstName.toLowerCase().includes(searchInput) ||
        author.lastName.toLowerCase().includes(searchInput)
    )

  }
}

@Pipe({
  name:'SearchBooksByAuthorId'
})
export class SearchBooksByAuthorId implements PipeTransform {
  transform(books: Book[], searchInput: string): any[]{
    if(!searchInput) {
      return books;
    }

    return books.filter(
      book =>book.author.id == Number(searchInput)
    )

  }
}

@Pipe({
  name:'SearchMyReadsByBookId'
})
export class SearchMyReadsByBookId implements PipeTransform {
  transform(myReads: MyRead[], searchInput: string): any[]{
    if(!searchInput) {
      return myReads;
    }

    return myReads.filter(
      myRead =>myRead.book.id == Number(searchInput)
    )

  }
}

@Pipe({
  name:'SearchMyReadsByUserId'
})
export class SearchMyReadsByUserId implements PipeTransform {
  transform(myReads: MyRead[], searchInput: string): any[]{
    if(!searchInput) {
      return myReads;
    }
    return myReads.filter(
      myRead =>myRead.user.id == Number(searchInput)
    )

  }
}
