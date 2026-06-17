from rest_framework import serializers
from .models import User, Course, Product, Book

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'    

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'    

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'    

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'    