import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Author, Book
from ..serializers import AuthorSerializer, BookSerializer

# initialize the APIClient app
client = Client()

# TODO: find a way to generalize these to stop copy/paste
class BookTest(TestCase):

  def setUp(self):
    # Need an actual author object before you can add it to a book
    author = Author.objects.create(firstName='Alexandre', lastName='Dumas')

    Book.objects.create(title="The Three Musketeers", genre="Classic", averageRating=4.0, author=author,
                        synopsis="In this book...")
    Book.objects.create(title="The Count of Monte Cristo", genre="Classic", averageRating=2.0, author=author,
                        synopsis="In this book...")

    self.get_url = 'get-book'
    self.edit_url = 'edit-book'

  def test_get_list_ok(self):
    response = client.get(reverse(self.get_url ))
    items = Book.objects.all()
    serializer = BookSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_detail_ok(self):
    response = client.get(reverse(self.get_url, args=[1]))
    item = Book.objects.get(pk=1)
    serializer = BookSerializer(item)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
class AuthorTest(TestCase):

  def setUp(self):
    Author.objects.create(firstName='Alexandre', lastName='Dumas')
    Author.objects.create(firstName='Lemony', lastName='Snicket')
    Author.objects.create(firstName='JK', lastName='Rowling')

    self.get_url = 'get-author'
    self.edit_url = 'edit-author'

  def test_get_list_ok(self):
    response = client.get(reverse(self.get_url))
    items = Author.objects.all()
    serializer = AuthorSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_detail_ok(self):
    response = client.get(reverse(self.get_url, args=[1]))
    item = Author.objects.get(pk=1)
    serializer = AuthorSerializer(item)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)

  def test_get_detail_dne(self):
    response = client.get(reverse(self.get_url, args=[4]))
    self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

