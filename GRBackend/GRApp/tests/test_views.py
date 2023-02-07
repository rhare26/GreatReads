from http import client

from django.conf import settings
from rest_framework import status
from django.urls import reverse
from rest_framework.request import Request

from ..models import Author, Book, User, MyRead
from ..serializers import AuthorSerializer, BookSerializer, MyReadSerializer
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

settings.MEDIA_URL = 'http://testserver/media/'  # needed for image urls to match


def addDummyAuthorsToDB():
  Author.objects.create(firstName='Alexandre', lastName='Dumas')
  Author.objects.create(firstName='Lemony', lastName='Snicket')

  return Author.objects.all


def addDummyBooksToDB():
  addDummyAuthorsToDB()  # need author before creating books
  author = Author.objects.get(pk=1)  # arbitrarily use first one

  Book.objects.create(title="The Three Musketeers", genre="Classic", averageRating=4.0, author=author,
                      synopsis="In this book...")
  Book.objects.create(title="The Count of Monte Cristo", genre="Classic", averageRating=2.0, author=author,
                      synopsis="In this book...")
def addDummyMyReadsToDB():
  addDummyBooksToDB()
  book = Book.objects.get(pk=1)  # arbitrarily use first one
  user = User.objects.get(pk=1)  # arbitrarily use first one
  MyRead.objects.create(book=book, user=user, status='Currently reading', owned='True')
  MyRead.objects.create(book=book, user=user, status='Currently reading', owned='True')


class RemoteAuthenticatedTest(APITestCase):

  def setUp(self):
    self.username = 'my_username'
    self.user = User.objects.create_user(username='my_username',
                                         email='my_username@example.com',
                                         password='p@ssw0rd123')
    Token.objects.create(user=self.user)
    super(RemoteAuthenticatedTest, self).setUp()
    self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.user.auth_token.key)

  def getAuthenticated(self, url) -> Request:
    return self.client.get(url, format='json', REMOTE_USER=self.username)

  def postAuthenticated(self, url, data) -> Request:
    return self.client.post(url, data=data, format='json', REMOTE_USER=self.username)

  def patchAuthenticated(self, url, data) -> Request:
    return self.client.patch(url, data=data, format='json', REMOTE_USER=self.username)

  def deleteAuthenticated(self, url) -> Request:
    return self.client.delete(url, format='json', REMOTE_USER=self.username)


class BookTest(RemoteAuthenticatedTest):

  def setUp(self):
    addDummyBooksToDB()

    self.get_detail_url = 'get-book-detail'
    self.get_list_url = 'get-book-list'
    self.edit_detail_url = 'edit-book-detail'
    self.edit_list_url = 'edit-book-list'

    self.dataToPost = {"title": "The Three Musketeers", "genre": "Classic", "averageRating": 4.0, "author": 1,
                       "synopsis": "In this book..."}
    self.dataToPatch = {"title": "The Count of Monte Cristo", "averageRating": 5.0}
    super(BookTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_ok(self):
    itemId = 1
    url = reverse(self.get_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Book.objects.get(pk=itemId)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_post_detail_ok(self):
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    itemId = response.data['id']

    item = Book.objects.get(pk=itemId)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_post_detail_no_data(self):
    data = {}
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

  def test_patch_detail_ok(self):
    itemId = 2
    data = self.dataToPatch
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().patchAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Book.objects.get(pk=itemId)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_delete_detail_ok(self):
    # create new
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # delete
    itemId = response.data['id']
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().deleteAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    # try to get
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class AuthorTest(RemoteAuthenticatedTest):
  def setUp(self):
    addDummyAuthorsToDB()

    self.dataToPost = {"firstName": "Agatha", "lastName": "Christie"}
    self.dataToPatch = {"lastName": "Harkness"}

    self.get_detail_url = 'get-author-detail'
    self.get_list_url = 'get-author-list'
    self.edit_detail_url = 'edit-author-detail'
    self.edit_list_url = 'edit-author-list'

    super(AuthorTest, self).setUp()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    items = Author.objects.all()
    serializer = AuthorSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_ok(self):
    itemId = 1
    url = reverse(self.get_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Author.objects.get(pk=itemId)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_dne(self):
    nonexistantItemId = 99
    url = reverse(self.get_detail_url, args=(nonexistantItemId,))
    response = super().getAuthenticated(url)

    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

  def test_post_detail_ok(self):
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    itemId = response.data['id']
    item = Author.objects.get(pk=itemId)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_post_detail_no_data(self):
    data = {}
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

  def test_patch_detail_ok(self):
    itemId = 2
    data = self.dataToPatch
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().patchAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = Author.objects.get(pk=itemId)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_delete_detail_ok(self):
    # create new
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # delete
    itemId = response.data['id']
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().deleteAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    # try to get
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class MyReadTest(RemoteAuthenticatedTest):
  def setUp(self):


    # assumes the userId created in super will be 1
    self.dataToPost = {'book': 1, 'user': 1, 'status': 'Already read'}
    self.dataToPatch = {"status": "Currently reading"}

    self.get_detail_url = 'get-myread-detail'
    self.get_list_url = 'get-myread-list'
    self.edit_detail_url = 'edit-myread-detail'
    self.edit_list_url = 'edit-myread-list'

    super(MyReadTest, self).setUp()

    addDummyMyReadsToDB()

  def test_get_list_ok(self):
    url = reverse(self.get_list_url)
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    items = MyRead.objects.all()
    serializer = MyReadSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_ok(self):
    itemId = 1
    url = reverse(self.get_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = MyRead.objects.get(pk=itemId)
    serializer = MyReadSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_get_detail_dne(self):
    nonexistantItemId = 99
    url = reverse(self.get_detail_url, args=(nonexistantItemId,))
    response = super().getAuthenticated(url)

    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

  def test_post_detail_ok(self):
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    itemId = response.data['id']
    items = MyRead.objects.get(pk=itemId)
    serializer = MyReadSerializer(items)
    self.assertEqual(response.data, serializer.data)

  def test_post_detail_no_data(self):
    data = {}
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

  def test_patch_detail_ok(self):
    itemId = 2
    data = self.dataToPatch
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().patchAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

    item = MyRead.objects.get(pk=itemId)
    serializer = MyReadSerializer(item)
    self.assertEqual(response.data, serializer.data)

  def test_delete_detail_ok(self):
    # create new
    data = self.dataToPost
    url = reverse(self.edit_list_url)
    response = super().postAuthenticated(url, data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    # delete
    itemId = response.data['id']
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().deleteAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    # try to get
    url = reverse(self.edit_detail_url, args=(itemId,))
    response = super().getAuthenticated(url)
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
