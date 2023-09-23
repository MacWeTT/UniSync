from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User, Student, University


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.user_type == "student":
            Student.objects.create(user=instance)
        elif instance.user_type == "university":
            University.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    if instance.user_type == "student":
        instance.student.save()
    elif instance.user_type == "university":
        instance.university.save()
