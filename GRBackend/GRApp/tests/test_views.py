from django.conf import settings
from rest_framework import status
from django.urls import reverse

from ..models import Author, Book, User
from ..serializers import AuthorSerializer, BookSerializer
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase

#TODO: look into better way with less repetition

settings.MEDIA_URL = 'http://testserver/media/'
class RemoteAuthenticatedTest(APITestCase):
  client_class = APIClient
  def setUp(self):
    self.username = 'my_username'
    self.user = User.objects.create_user(username='my_username',
                                         email='my_username@example.com',
                                         password='p@ssw0rd123')
    Token.objects.create(user=self.user)
    super(RemoteAuthenticatedTest, self).setUp()



class BookTest(RemoteAuthenticatedTest):

  def setUp(self):
    author = Author.objects.create(firstName='Alexandre', lastName='Dumas') #books need authors first

    Book.objects.create(title="The Three Musketeers", genre="Classic", averageRating=4.0, author=author,
                        synopsis="In this book...")
    Book.objects.create(title="The Count of Monte Cristo", genre="Classic", averageRating=2.0, author=author,
                        synopsis="In this book...")

    self.get_detail_url = 'get-book-detail'
    self.get_list_url = 'get-book-list'
    self.edit_detail_url = 'edit-book-detail'
    self.edit_list_url = 'edit-book-list'

    super(BookTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)
    response = self.client.get(url, format='json', REMOTE_USER=self.username)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    self.assertEqual(response.data, serializer.data)


  def test_get_detail_ok(self):
    url = reverse(self.get_detail_url, args=[1])
    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)
    response = self.client.get(url, format='json', REMOTE_USER=self.username)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Book.objects.get(pk=1)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)

class AuthorTest(RemoteAuthenticatedTest):
  def setUp(self):
    Author.objects.create(firstName='Alexandre', lastName='Dumas')
    Author.objects.create(firstName='Lemony', lastName='Snicket')
    Author.objects.create(firstName='JK', lastName='Rowling')

    self.get_detail_url = 'get-author-detail'
    self.get_list_url = 'get-author-list'
    self.edit_detail_url = 'edit-author-detail'
    self.edit_list_url = 'edit-author-list'

    super(AuthorTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)

    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)
    response = self.client.get(url, format='json', REMOTE_USER=self.username)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    items = Author.objects.all()
    serializer = AuthorSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_ok(self):
    url = reverse(self.get_detail_url, args=[1])

    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)
    response = self.client.get(url, format='json', REMOTE_USER=self.username)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Author.objects.get(pk=1)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)


  def test_get_detail_dne(self):
    response = self.client.get(reverse(self.edit_detail_url, args=[1]))
    self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

