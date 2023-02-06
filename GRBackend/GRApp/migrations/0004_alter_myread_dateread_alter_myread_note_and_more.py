# Generated by Django 4.1.5 on 2023-02-06 15:17

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GRApp', '0003_myread_user_alter_myread_dateread'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myread',
            name='dateRead',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='myread',
            name='note',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
        migrations.AlterField(
            model_name='myread',
            name='rating',
            field=models.DecimalField(blank=True, decimal_places=1, default=None, max_digits=2, null=True, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)]),
        ),
    ]
