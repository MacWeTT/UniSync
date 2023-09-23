from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

docs = get_schema_view(
    openapi.Info(
        title="UniSync API",
        default_version="v1",
        description="Welcome to UniSync's API documentation. This API provides all the necessary ecommerce endpoints required to build a fully functional project collaboration website, as well as the best authentication and authorization system for your website.",
        terms_of_service="https://www.yourapp.com/terms/",
        contact=openapi.Contact(email="manasbajpai18@gmail.com"),
        license=openapi.License(name="Your License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
