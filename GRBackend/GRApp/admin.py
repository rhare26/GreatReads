from django.contrib import admin
from .models import Book, Author, MyRead

# Register your models here.
admin.site.register(Book)
admin.site.register(Author)
admin.site.register(MyRead)
