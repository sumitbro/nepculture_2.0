from django.shortcuts import render

from rest_framework.response import Response
from .models import Item
from .serializer import ItemSerializer
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, UpdateAPIView, RetrieveAPIView, RetrieveUpdateAPIView, RetrieveUpdateDestroyAPIView

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated

# Create your views here.




class Itemlist(ListAPIView):
    permission_classes= [AllowAny]
    queryset= Item.objects.all()
    serializer_class= ItemSerializer
    # authentication_classes= [JWTAuthentication]
    # permission_classes= [IsAuthenticated]
    

class Itemretriveupdate(RetrieveUpdateDestroyAPIView):
    permission_classes= [AllowAny]
    queryset= Item.objects.all()
    serializer_class= ItemSerializer


class Itemcreate(CreateAPIView):
    permission_classes= [AllowAny]
    queryset= Item.objects.all()
    serializer_class= ItemSerializer

     