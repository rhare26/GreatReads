from django.urls import path, include
from rest_framework.routers import DefaultRouter

from GRApp import views
from GRApp.views import GetBookViewSet, GetAuthorViewSet, GetMyReadViewSet, EditBookViewSet, EditAuthorViewSet, \
  EditMyReadViewSet

router = DefaultRouter()
router.register(r'get-book', GetBookViewSet, basename='get-book')
router.register(r'get-author', GetAuthorViewSet, basename='get-author')
router.register(r'get-myread', GetMyReadViewSet, basename='get-myread')
router.register(r'edit-book', EditBookViewSet, basename='edit-book')
router.register(r'edit-author', EditAuthorViewSet, basename='edit-author')
router.register(r'edit-myread', EditMyReadViewSet, basename='edit-myread')


urlpatterns = [
    path('', include(router.urls)),
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('login/', views.LoginView.as_view(), name='login'),
]
