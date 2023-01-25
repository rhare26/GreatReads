from rest_framework import serializers
from GRApp.models import Book, Author, MyBook


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


class MyBookSerializer(serializers.ModelSerializer):
  class Meta:
    model = MyBook
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
