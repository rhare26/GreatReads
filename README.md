# GreatReads
[In progress] A web application using Django and Angular to manage book and reading lists, modelled after GoodReads. This is a personal project to teach myself these frameworks.

## Features
### Screenshots (as of 2/4/23)
![Login](https://user-images.githubusercontent.com/85655946/216779262-0caf4035-5db1-454b-9fb8-86aa1509e317.png)

![BrowseBooks](https://user-images.githubusercontent.com/85655946/216779269-65675f21-8585-47dd-b0d5-618915e0e813.png)

![AddBook](https://user-images.githubusercontent.com/85655946/216779276-9167f336-d20f-402c-afa8-e6fc4abec7d6.png)

![SearchBooks](https://user-images.githubusercontent.com/85655946/216779282-7e6f02db-0c0e-48ab-b628-50716369d079.png)

![BrowseAuthors](https://user-images.githubusercontent.com/85655946/216779284-198a4d25-f130-46b8-a685-002f413352c8.png)


### Backend 
Completed: Models with foreign keys, serializers, views with ModelViewSet and permission classes, login & authentication with JWT 

In progress: Automated tests for all requests (not just GET), updated tests now that authentication has been added

### Frontend
Completed: JWT authentication in session storage (although this method is vulnerable to XSS), login, routing (including to specific resource details via id), CRUD capabilities on books and authors (minus images), book and author detail (including listing books by author)

In progress: Token expiration and refresh, role-based authorization, new user registration, my-reads (books saved to a user's lists for tracking with notes, reviews, etc...), newsfeed of all my-reads on the site, updating book or author images

## Acknowledgments
Below are resources and tutorials that were heavily borrowed from:

For setting up the project structure - https://www.youtube.com/watch?v=1Hc7KlLiU9w

For search function on frontend - https://plainenglish.io/blog/how-to-implement-an-instant-search-functionality-in-angular-e0c0a1e97502

For authentication on backend (series) - https://www.youtube.com/watch?v=8iiDWPXleIc&list=PLEt8Tae2spYlosWRH9JDpKNxzb3bSOJGx&index=7

For authentication on frontend - https://www.youtube.com/watch?v=7G7qzlblJcI



# Frontend Setup
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
