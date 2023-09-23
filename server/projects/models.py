from django.db import models
from users.models import University, Student
from django.utils import timezone
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class Base(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(db_index=True, default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Tag(Base):
    text = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return "Tag[id:{id}, text:{text}]".format(id=self.id, text=self.text)


class Project(Base):
    created_by = models.ForeignKey(University, on_delete=models.CASCADE)

    name = models.CharField(max_length=100)
    views = models.IntegerField(default=0)
    description = models.TextField()
    tags = models.ManyToManyField(Tag, related_name="projects")
    contributors = models.ManyToManyField(Student, related_name="contributed_projects")

    def __str__(self):
        return "Project[id:{id}, name:{name}]".format(
            id=self.id, name=self.name
        )
