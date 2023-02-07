# GreatReads
[In progress] This is a web application using Django, Angular, Material, SCSS, and HTML to manage book and reading lists. It's modeled after Amazon's GoodReads website. This is a personal project to teach myself these frameworks. The project is still in progress and some features have not been implemented yet.

## Backend 
Django was used for models with foreign keys, serializers, views with ModelViewSet and permission classes, & authentication with JWT. Unit tests are still in progress after adding authentication.

## Logging and registering
For logging in, a JWT access token is retrieved from the backend and stored in session storage. An HTTP Interceptor appends the bearer token to future requests. This was a simple solution to get it running, but ultimately I would like to switch to cookies as they are not vulnerable to XSS.

<img src="https://user-images.githubusercontent.com/85655946/217087339-55060b3c-c711-494d-ac0f-1f16c102c5cf.png" width=75% height=75%>

When registering, the backend will ensure that the email and username are unique. Data validation with error messages has not been implemented on the frontend yet.

<img src="https://user-images.githubusercontent.com/85655946/217087383-909645f4-1a34-4030-8c4f-7aec5749e922.png" width=75% height=75%>

## Newsfeed
The news feed lists all recent reads across the application. I'm planning to add book cover images but ran into a problem using the MEDIA_URL in a nested serializer (Book is a foreign key in the MyRead model). The book titles contain a link to the book detail page.

<img src="https://user-images.githubusercontent.com/85655946/217087437-d0314000-e88a-4f32-912b-7f7c69aa7743.png" width=75% height=75%>

## Profile
The profile will fetch information about the current reader and display their reads in a table. This is a first draft that will need more work.

<img src="https://user-images.githubusercontent.com/85655946/217087492-66c52df0-d863-429e-a1cd-15eceb56ad7d.png" width=75% height=75%>

## Browsing/Searching Books & Authors
This component allows users to browse by books or authors using the radio buttons. The search bar uses a pipe to search by either title/author for books or by first/last name for authors. Filters, sorting, and pagination have not been implemented yet.

<img src="https://user-images.githubusercontent.com/85655946/217264797-1a0f6b67-4bc4-4ea6-960c-f31b7d444691.png" width=75% height=75%>
<img src="https://user-images.githubusercontent.com/85655946/217264816-42dbaed6-075b-40ba-a0ba-2d0840a34a9d.png" width=75% height=75%>
<img src="https://user-images.githubusercontent.com/85655946/217264822-f0a1d1c5-063b-45da-b09a-de06f545382a.png" width=75% height=75%>

## Adding/Updating/Deleting Books & Authors
The pencil and trashcan icons on the card allow for updating or deleting books and authors. The plus button on the bottom right allows for adding new ones. Update diaologs are from the same Add-Edit component, just with different titles. CRUD for images has not been implemented yet.

The book and author lists are automatically refreshed whenever a book/author has been added, updated, or deleted using RxJS Subjects.

Note that books and authors are seperate from your reading records. This functionality will probably be made accessible by admins only in the future. The Add and These will need more styling and data validation.

<img src="https://user-images.githubusercontent.com/85655946/217264275-740d1066-ad8b-4b4b-8e8d-9b850f6f3087.png" width=75% height=75%>
<img src="https://user-images.githubusercontent.com/85655946/217264282-09c30a89-6375-458c-b914-ab60e47b633f.png" width=75% height=75%>

## Book and Author Detail
The book detail contains a link to the author and a list of all read records for that book (with reviews, ratings, etc...). The author detail contains a list of all of their books. This book-card is reused from the search/browse feature and contains a link in the title to the book detail.

<img src="https://user-images.githubusercontent.com/85655946/217258625-c9cb0bb8-60b1-454c-bc47-1673bd9975c3.png" width=75% height=75%>
<img src="https://user-images.githubusercontent.com/85655946/217258629-144bdd74-092e-4a4b-9d97-6bb69427405e.png" width=75% height=75%>

## Acknowledgments
Below are resources and tutorials that were heavily borrowed from:

For setting up the project structure - https://www.youtube.com/watch?v=1Hc7KlLiU9w

For search function & pipes on frontend - https://plainenglish.io/blog/how-to-implement-an-instant-search-functionality-in-angular-e0c0a1e97502

For authentication on backend (series) - https://www.youtube.com/watch?v=8iiDWPXleIc&list=PLEt8Tae2spYlosWRH9JDpKNxzb3bSOJGx&index=7

For authentication on frontend - https://www.youtube.com/watch?v=7G7qzlblJcI

