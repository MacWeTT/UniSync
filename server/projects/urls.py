from django.urls import path
from .views import getProjectRoutes
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TagViewSet


urlpatterns = [
    path("", getProjectRoutes, name="Project Routes")
]
