from django.contrib import admin
from django.urls import path, include
from .docs import docs
from projects.views import ProjectViewSet, TagViewSet
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register(r"projects", ProjectViewSet)
router.register(r"tags", TagViewSet)

urlpatterns = router.urls
urlpatterns += [
    path("admin/", admin.site.urls),
    path("", docs.with_ui("swagger"), name="API Docs"),
    path("projects/", include("projects.urls"), name="Projects API"),
    path("users/", include("users.urls"), name="Users API"),
]
