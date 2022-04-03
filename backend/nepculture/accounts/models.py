from audioop import add
from operator import mod
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, username, password, **other_fields):
         if not email:
             raise ValueError(_('Email is required'))
         if not username:
             raise ValueError(_('Username is required'))
         if not type:
            raise ValueError(_('type is required'))
         email= self.normalize_email(email)
         user= self.model(email=email, username=username, **other_fields)
         user.set_password(password)
         user.save()
         return user
    
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        # other_fields.setdefault('type', 'SUPERUSER')

        if other_fields.get('is_staff') is None:
            raise ValueError("Superuser must be assigned is_staff=True")
        if other_fields.get('is_superuser') is None:
            raise ValueError("Superuser must be assigned is_superuser= True")
        return self.create_user(email, username, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):

    
        # SUPERUSER = "SUPERUSER", 'Superuser'

    username= models.CharField(max_length=50, unique=False, null=True)
    email= models.EmailField(max_length=250, unique=True)
    address= models.CharField(max_length=50, unique=False, null=True)
    phone= models.BigIntegerField(null=True)
    is_active= models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    # type= models.CharField(_('Type'), max_length=50, choices=Types.choices, null=True)
     
    # date_joined= models.DateTimeField(auto_now_add=True)



    # info_created= models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'address', 'phone']

    objects = UserManager()

    def get_full_name(self):
        """Retrieve full name of user"""
        return self.username

    def get_short_name(self):
        """Retrieve short name of user"""
        return self.username

    def __str__(self):
        return self.username




class Profile(models.Model):
    user_profile = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,  primary_key=True, related_name='student_info' )
    first_name = models.CharField(max_length=120, blank=True)
    last_name = models.CharField(max_length=120, blank=True)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    city = models.CharField(default='', max_length=30, null=True, blank=True)
    country = models.CharField(default='', max_length=30, null=True, blank=True)

    # status_text = models.CharField(max_length=255, null=True)
    created_on = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        """Return the models as a string, below line means when we convert model to a string,we want to see the status text value associated to the model"""
        return self.first_name





















# class Profile(models.Model):
#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     first_name = models.CharField(max_length=120, blank=True)
#     last_name = models.CharField(max_length=120, blank=True)
#     bio = models.TextField(max_length=500, blank=True)
#     location = models.CharField(max_length=30, blank=True)
#     birth_date = models.DateField(null=True, blank=True)
#     city = models.CharField(default='', max_length=30, null=True, blank=True)
#     country = models.CharField(default='', max_length=30, null=True, blank=True)

#     def __str__(self):
#         return self.location

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()


















# from django.contrib.auth.models import AbstractUser

# class User(AbstractUser):
#     email= models.EmailField(verbose_name='email',max_length=255,unique=True)
#     # username= models.CharField(max_length=40)
#     REQUIRED_FIELDS= ['username']
#     USERNAME_FIELD= 'email'

#     def get_username(self):
#         return self.email

