# Generated by Django 4.1.5 on 2023-01-28 19:45

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('GRApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mybook',
            name='book',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratingss', to='GRApp.book'),
        ),
        migrations.CreateModel(
            name='MyRead',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('WANT', 'Want to read'), ('CURRENTLY', 'Currently reading'), ('ALREADY', 'Already read'), ('DNF', 'Did not finish')], max_length=10)),
                ('note', models.CharField(max_length=350, null=True)),
                ('dateRead', models.DateField()),
                ('owned', models.BooleanField(default=False)),
                ('rating', models.DecimalField(decimal_places=1, default=None, max_digits=2, null=True, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)])),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings', to='GRApp.book')),
            ],
        ),
    ]
