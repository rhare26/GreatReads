from typing import Type, TypeVar

from django.db.models import Model
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.viewsets import ViewSet, ModelViewSet

from GRApp.models import Book, Author, MyRead
from GRApp.serializers import BookSerializer, AuthorSerializer, MyReadSerializer


from rest_framework import viewsets

class BookViewSet(viewsets.ModelViewSet):
  queryset = Book.objects.all()
  serializer_class = BookSerializer


class AuthorViewSet(viewsets.ModelViewSet):
  queryset = Author.objects.all()
  serializer_class = AuthorSerializer

class MyReadViewSet(viewsets.ModelViewSet):
  queryset = MyRead.objects.all()
  serializer_class = MyReadSerializer
