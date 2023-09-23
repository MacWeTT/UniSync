import django_filters
from .models import Project, Tag


class ProjectFilter(django_filters.FilterSet):
    tags = django_filters.ModelMultipleChoiceFilter(
        queryset=Tag.objects.all(),
        to_field_name='text',
        conjoined=True)

    class Meta:
        model = Project
        fields = ['tags', 'name', 'description']
