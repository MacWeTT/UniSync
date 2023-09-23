from rest_framework import serializers
from .models import Project, Tag


class TagSerializer(serializers.ModelSerializer):
    projects = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Tag
        fields = ['id', 'text', 'projects']


class ProjectSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True,
        queryset=Tag.objects.all(),
        slug_field='text'
    )

    class Meta:
        model = Project
        fields = ['id',  'name', 'description', 'tags']
