from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Author(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    bio = models.CharField(max_length=350, null=True)

    def __str__(self):
        return self.firstName + ' ' + self.lastName


class Book(models.Model):
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

#todo: rename to MyRead
class MyBook(models.Model):
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
