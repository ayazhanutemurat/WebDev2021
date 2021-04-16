# Generated by Django 2.0 on 2021-04-16 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(default='')),
                ('city', models.CharField(max_length=200)),
                ('address', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(default='')),
                ('salary', models.FloatField(max_length=200)),
                ('company', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.Company')),
            ],
        ),
    ]
