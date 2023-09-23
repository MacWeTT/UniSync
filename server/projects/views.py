from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Project, Tag
from .serializers import ProjectSerializer, TagSerializer
from .filters import ProjectFilter


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_class = ProjectFilter


class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tags to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


@api_view(["GET"])
def getProjectRoutes(request):
    """
    Returns all the routes available in the projects API
    """

    routes = [
        "GET /api/projects/",
        "GET /api/projects/{id}/",
    ]

    return Response(routes)
