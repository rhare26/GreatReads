from django.contrib.auth import authenticate
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, generics, status

from GRApp.models import Book, Author, MyRead
from GRApp.serializers import BookSerializer, AuthorSerializer, MyReadSerializer, SignUpSerializer
from .tokens import create_jwt_pair_for_user


@permission_classes([IsAuthenticated])
class GetBookViewSet(viewsets.ModelViewSet):
  http_method_names=['get']

  queryset = Book.objects.all()
  serializer_class = BookSerializer

@permission_classes([IsAuthenticated])
class GetAuthorViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']

  queryset = Author.objects.all()
  serializer_class = AuthorSerializer

@permission_classes([IsAuthenticated])
class GetMyReadViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']

  queryset = MyRead.objects.all()
  serializer_class = MyReadSerializer


@permission_classes([IsAuthenticated])
class EditBookViewSet(viewsets.ModelViewSet):
  http_method_names = ['get', 'post', 'patch', 'put', 'delete']
  queryset = Book.objects.all()
  serializer_class = BookSerializer


@permission_classes([IsAuthenticated])
class EditAuthorViewSet(viewsets.ModelViewSet):
  http_method_names = ['get', 'post', 'patch', 'put', 'delete']

  queryset = Author.objects.all()
  serializer_class = AuthorSerializer



@permission_classes([IsAuthenticated])
class EditMyReadViewSet(viewsets.ModelViewSet):
  http_method_names = ['get', 'post', 'patch', 'put', 'delete']

  queryset = MyRead.objects.all()
  serializer_class = MyReadSerializer



@permission_classes([AllowAny])
class SignUpView(generics.GenericAPIView):
  serializer_class = SignUpSerializer
  permission_classes = []

  def post(self, request: Request):
    data = request.data

    serializer = self.serializer_class(data=data)

    if serializer.is_valid():
      serializer.save()

      response = {"message": "User Created Successfully", "data": serializer.data}

      return Response(data=response, status=status.HTTP_201_CREATED)

    return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@permission_classes([AllowAny])
class LoginView(APIView):

  def post(self, request: Request):

    email = request.data.get("email")
    password = request.data.get("password")
    print(email + password)
    user = authenticate(email=email, password=password)

    if user is not None:

      tokens = create_jwt_pair_for_user(user)

      response = {"message": "Login Successful", "tokens": tokens}
      return Response(data=response, status=status.HTTP_200_OK)

    else:
      return Response(data={"message": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)

  def get(self, request: Request):
    content = {"user": str(request.user), "auth": str(request.auth)}

    return Response(data=content, status=status.HTTP_200_OK)
