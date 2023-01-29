from django.test import TestCase, Client
from django.urls import reverse
from GRApp.models import Book, Author, MyRead
import json


# Test Suite: TestUserViews - 7 independent tests
class TestBookViews(TestCase):

  def setUp(self):
    self.client = Client()
    self.url = '/book/'
    self.model = Book

    self.test_field = "title"
    self.test_value = "The Hunchback of Notre Dame"

    # Must have a valid author to create new book
    self.test_author = {
        "firstName": "Brandon",
        "lastName": "Sanderson"
      }

    self.client.post('/author/', self.test_author)
    self.assertGreaterEqual(Author.objects.count(), 0)

    self.test_item = {
        "title": "The Way of Kings",
        "genre": "Fantasy",
        "synopsis": "In The Way of Kings...",
        "averageRating": 5.0,
        "author": 1
      }

  def test_POST_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

  def test_POST_no_data(self):
    response = self.client.post(self.url)

    self.assertEqual(response.status_code, 400)
    self.assertEqual(self.model.objects.count(), 0)

  def test_PUT_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

    response = self.client.put(self.url + '1', {self.test_field:self.test_value}, content_type="application/json")
    self.assertEqual(response.status_code, 200)

    fetch = self.client.get(self.url + '1').data
    self.assertEqual(fetch[self.test_field], self.test_value)

  def test_PUT_does_not_exist(self):
    response = self.client.put(self.url + '4', content_type="application/json")

    self.assertEqual(response.status_code, 404)

  def test_DELETE_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

    response = self.client.delete(self.url + '1')

    self.assertEqual(response.status_code, 200)
    self.assertEqual(self.model.objects.count(), 0)

  def test_DELETE_does_not_exist(self):
    response = self.client.delete(self.url + '4')

    self.assertEqual(response.status_code, 404)

class TestAuthorViews(TestCase):

  def setUp(self):
    self.client = Client()
    self.url = '/author/'
    self.model = Author

    self.test_field = "title"
    self.test_value = "The Hunchback of Notre Dame"
    self.test_item = {
        "firstName": "Agatha",
        "lastName": "Christie"
      }

  def test_POST_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

  def test_POST_no_data(self):
    response = self.client.post(self.url)

    self.assertEqual(response.status_code, 400)
    self.assertEqual(self.model.objects.count(), 0)

  def test_PUT_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

    response = self.client.put(self.url + '1', {self.test_field:self.test_value}, content_type="application/json")
    self.assertEqual(response.status_code, 200)

    fetch = self.client.get(self.url + '1').data
    self.assertEqual(fetch[self.test_field], self.test_value)

  def test_PUT_does_not_exist(self):
    response = self.client.put(self.url + '4', content_type="application/json")

    self.assertEqual(response.status_code, 404)

  def test_DELETE_correct(self):
    response = self.client.post(self.url, self.test_item)
    self.assertEquals(response.status_code, 201)

    response = self.client.delete(self.url + '1')

    self.assertEqual(response.status_code, 200)
    self.assertEqual(self.model.objects.count(), 0)

  def test_DELETE_does_not_exist(self):
    response = self.client.delete(self.url + '4')

    self.assertEqual(response.status_code, 404)
