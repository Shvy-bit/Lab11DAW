from django.db import models

class User(models.Model):
    name = models.CharField(max_length=25)
    username = models.CharField(max_length=25)
    userpassword = models.CharField(max_length=25)
    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=25)

class Product(models.Model):
    name = models.CharField(max_length=25)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=25)
    courses = models.ForeignKey(Course, on_delete=models.CASCADE)
