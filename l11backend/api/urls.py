from rest_framework.routers import DefaultRouter
from .views import UserViewSet, CourseViewSet, ProductViewSet, BookViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet),
router.register(r'courses', CourseViewSet),
router.register(r'products', ProductViewSet),
router.register(r'books', BookViewSet),

urlpatterns = router.urls
