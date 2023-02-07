from django.conf import settings
from rest_framework import status
from django.urls import reverse
from rest_framework.request import Request

from ..models import Author, Book, User
from ..serializers import AuthorSerializer, BookSerializer
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase


settings.MEDIA_URL = 'http://testserver/media/' #needed for image urls to match

def addDummyAuthorsToDB():
  Author.objects.create(firstName='Alexandre', lastName='Dumas')
  Author.objects.create(firstName='Lemony', lastName='Snicket')

  return Author.objects.all


def addDummyBooksToDB():
  addDummyAuthorsToDB() # need author before creating books
  author = Author.objects.get(pk=1) # arbitrarily use first one

  Book.objects.create(title="The Three Musketeers", genre="Classic", averageRating=4.0, author=author,
                      synopsis="In this book...")
  Book.objects.create(title="The Count of Monte Cristo", genre="Classic", averageRating=2.0, author=author,
                      synopsis="In this book...")


class RemoteAuthenticatedTest(APITestCase):
  client_class = APIClient
  def setUp(self):
    self.username = 'my_username'
    self.user = User.objects.create_user(username='my_username',
                                         email='my_username@example.com',
                                         password='p@ssw0rd123')
    Token.objects.create(user=self.user)
    super(RemoteAuthenticatedTest, self).setUp()

  def getAuthenticated(self, url) -> Request:
    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)
    return self.client.get(url, format='json', REMOTE_USER=self.username)

class BookTest(RemoteAuthenticatedTest):

  def setUp(self):
    addDummyBooksToDB()

    self.get_detail_url = 'get-book-detail'
    self.get_list_url = 'get-book-list'
    self.edit_detail_url = 'edit-book-detail'
    self.edit_list_url = 'edit-book-list'

    super(BookTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    self.assertEqual(response.data, serializer.data)


  def test_get_detail_ok(self):
    itemId=1
    url = reverse(self.get_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Book.objects.get(pk=itemId)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)

class AuthorTest(RemoteAuthenticatedTest):
  def setUp(self):
    addDummyAuthorsToDB()

    self.get_detail_url = 'get-author-detail'
    self.get_list_url = 'get-author-list'
    self.edit_detail_url = 'edit-author-detail'
    self.edit_list_url = 'edit-author-list'

    super(AuthorTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    response = super().getAuthenticated(url)

    items = Author.objects.all()
    serializer = AuthorSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_ok(self):
    itemId = 1
    url = reverse(self.get_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)

    item = Author.objects.get(pk=itemId)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)


  def test_get_detail_dne(self):
    response = super().getAuthenticated(self.get_detail_url)
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

