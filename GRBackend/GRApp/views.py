from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from GRApp.models import Book, Author, MyBook
from GRApp.serializers import BookSerializer, AuthorSerializer, MyBookSerializer


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@csrf_exempt
def book_api(request, pk=0):
    if pk != 0:
        try:
            book = Book.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = BookSerializer(book)
            return Response(serializer.data)

        if request.method == 'PUT':
            serializer = BookSerializer(book, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if request.method == 'DELETE':
            book.delete()
            return Response(status=status.HTTP_200_OK)

    else:
        if request.method == 'GET':
            try:
                books = Book.objects.prefetch_related('author').all()
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)

            serializer = BookSerializer(books, many=True)
            return Response(serializer.data)

        if request.method == 'POST':
            serializer = BookSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_201_CREATED, data=serializer.data)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_501_NOT_IMPLEMENTED)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@csrf_exempt
def my_book_api(request, pk=0):
  if pk != 0:
    try:
      myBook = MyBook.objects.get(id=pk)
    except:
      return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
      serializer = MyBookSerializer(myBook)
      return Response(serializer.data)

    if request.method == 'PUT':
      serializer = BookSerializer(myBook, data=request.data, partial=True)
      if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_200_OK)
      return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
      myBook.delete()
      return Response(status=status.HTTP_200_OK)

  else:
    if request.method == 'GET':
      try:
        books = Book.objects.prefetch_related('author').all()
      except:
        return Response(status=status.HTTP_404_NOT_FOUND)

      serializer = BookSerializer(books, many=True)
      return Response(serializer.data)

    if request.method == 'POST':
      serializer = BookSerializer(data=request.data)
      if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED, data=serializer.data)
      return Response(status=status.HTTP_400_BAD_REQUEST)

  return Response(status=status.HTTP_501_NOT_IMPLEMENTED)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@csrf_exempt
def author_api(request, pk=0):
    if pk != 0:
        try:
            author = Author.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = AuthorSerializer(author)
            return Response(serializer.data)

        if request.method == 'PUT':
            serializer = AuthorSerializer(author, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if request.method == 'DELETE':
            author.delete()
            return Response(status=status.HTTP_200_OK)

    # no id specified
    else:
        if request.method == 'GET':
            try:
                authors = Author.objects.prefetch_related('books').all()
            except:
                return Response(status=status.HTTP_404_NOT_FOUND)

            serializer = AuthorSerializer(authors, many=True)
            return Response(serializer.data)

        if request.method == 'POST':
            serializer = AuthorSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(status=status.HTTP_201_CREATED, data=serializer.data)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_501_NOT_IMPLEMENTED)
