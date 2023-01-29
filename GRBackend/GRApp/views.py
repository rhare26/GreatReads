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
