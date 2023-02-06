from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import ValidationError

from GRApp.models import Book, Author, MyRead, User

class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        try:
            data['author'] = AuthorSerializer(Author.objects.get(pk=data['author'])).data
        except Author.DoesNotExist:
            data['author'] = None
        return data

class MyReadSerializer(serializers.ModelSerializer):
  class Meta:
    model = MyRead
    fields = '__all__'

  def to_representation(self, instance):
    data = super().to_representation(instance)
    try:
      data['book'] = BookSerializer(Author.objects.get(pk=data['book'])).data
    except Author.DoesNotExist:
      data['book'] = None
    return data

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.CharField(max_length=80)
  password = serializers.CharField(min_length=8, write_only=True)

  class Meta:
    model = User
    fields = ["email", "password"]

  def validate(self, attrs):
    email_exists = User.objects.filter(email=attrs["email"]).exists()

    if email_exists:
      raise ValidationError("Email has already been used")

    return super().validate(attrs)

  def create(self, validated_data):
    password = validated_data.pop("password")

    user = super().create(validated_data)

    user.set_password(password)

    user.save()

    Token.objects.create(user=user)

    return user
