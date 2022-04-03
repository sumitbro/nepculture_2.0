from rest_framework import serializers
from djoser.serializers import UserCreateSerializer,UserSerializer
from django.contrib.auth import get_user_model
from .models import *

User= get_user_model()








class AccountCreateSerializer(UserCreateSerializer):
    # password = serializers.CharField(min_length=8, write_only=True)
    """Serializes a user profile object"""


#meta class is used to configure serializer to point to a specific model in our project
    class Meta:
        model = User
        fields = ('id','email','username', 'address', 'phone', 'password') #list of fields in our model that we wish to manage through serializer
        extra_kwargs = {
        'password':{
            'write_only':True,
            
        }
    }





class ProfileSerializer(serializers.ModelSerializer):
    user_profile = serializers.StringRelatedField()
    """Serializes profile feed items"""

    class Meta:
        model = Profile # sets our serializer to ProfileFeedItem model created in models.py
        fields = ('user_profile','first_name', 'last_name', 'bio','location', 'birth_date', 'city', 'country', 'created_on') #
        extra_kwargs = {
        'user_profile':{'read_only':True}
        }
