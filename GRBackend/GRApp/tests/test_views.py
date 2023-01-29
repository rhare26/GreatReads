import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Author
from ..serializers import AuthorSerializer


# initialize the APIClient app
client = Client()


class GetAuthor(TestCase):

  def setUp(self):
    Author.objects.create(firstName='Alexandre', lastName='Dumas')
    Author.objects.create(firstName='Lemony', lastName='Snicket')
    Author.objects.create(firstName='JK', lastName='Rowling')

  def test_get_list_ok(self):
    response = client.get(reverse('author-list'))
    items = Author.objects.all()
    serializer = AuthorSerializer(items, many=True)
    self.assertEqual(response.data, serializer.data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
