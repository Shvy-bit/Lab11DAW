from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import User, Course, Product, Book
from .serializers import UserSerializer, CourseSerializer, ProductSerializer, BookSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class  = UserSerializer
    permission_classes = [IsAuthenticated]

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class  = CourseSerializer
    permission_classes = [IsAuthenticated]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class  = ProductSerializer
    permission_classes = [IsAuthenticated]

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class  = BookSerializer
    permission_classes = [IsAuthenticated]