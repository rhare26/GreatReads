from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models

from django.core.validators import MaxValueValidator, MinValueValidator


class CustomUserManager(BaseUserManager):
  def create_user(self, email, password, **extra_fields):
    email = self.normalize_email(email)
    user = self.model(email=email, **extra_fields)
    user.set_password(password)
    user.save()

    return user

  def create_superuser(self, email, password, **extra_fields):
    extra_fields.setdefault("is_staff", True)
    extra_fields.setdefault("is_superuser", True)

    if extra_fields.get("is_staff") is not True:
      raise ValueError("Superuser has to have is_STAFF being True")

    if extra_fields.get("is_superuser") is not True:
      raise ValueError("Superuser has to have is_superuser being True")

    return self.create_user(email=email, password=password, **extra_fields)


class User(AbstractUser):
  email = models.CharField(max_length=80, unique=True)
  username = models.CharField(max_length=45, unique=True)
  date_of_birth=models.DateField(null=True)

  objects = CustomUserManager()
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']

  def __str__(self):
    return self.username
class Author(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    image = models.ImageField(upload_to='uploads', default='uploads/default-author.jpg', blank=True)
    bio = models.CharField(max_length=350, null=True)

    def __str__(self):
        return self.firstName + ' ' + self.lastName


class Book(models.Model):
    image = models.ImageField(upload_to='uploads',default='uploads/default-book.jpg',blank=True)
    title = models.CharField(max_length=250)
    author = models.ForeignKey(Author, related_name="books", on_delete=models.SET_NULL, null=True)
    genre = models.CharField(max_length=50, null=True)
    synopsis = models.CharField(max_length=350, null=True)
    averageRating = models.DecimalField(
        default=None,
        null = True,
        max_digits=2,
        decimal_places=1,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(1)
        ]
    )

    def __str__(self):
        return self.title


class MyRead(models.Model):
  WANT = 'WANT'
  CURRENTLY = 'CURRENTLY'
  ALREADY = 'ALREADY'
  DNF = 'DNF'

  STATUS_CHOICES = [(WANT, 'Want to read'), (CURRENTLY, 'Currently reading'), (ALREADY, 'Already read'),
                    (DNF, 'Did not finish')]
  book = models.ForeignKey(Book, related_name="ratings", on_delete=models.CASCADE)
  status = models.CharField(max_length=10, choices=STATUS_CHOICES)
  note = models.CharField(max_length=350, null=True)
  dateRead = models.DateField()
  owned = models.BooleanField(default=False)
  rating = models.DecimalField(
    default=None,
    null=True,
    max_digits=2,
    decimal_places=1,
    validators=[
      MaxValueValidator(100),
      MinValueValidator(1),
    ]
  )

  def __str__(self):
    return self.status + ' ' + self.book.title
