from django.shortcuts import render
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.generics import  RetrieveUpdateDestroyAPIView
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from django.db.utils import IntegrityError

from .models import User, Profile
from .serializer import AccountCreateSerializer, ProfileSerializer

from rest_framework.permissions import IsAuthenticated
# from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication




class UserInfoAPIView(APIView):

    def get_user_info(self, pk):
        return get_object_or_404(Profile, pk=pk)

    def get(self, request):
        users = self.get_user_info(pk=request.user.id)
        serializer = ProfileSerializer(instance=users)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        
        serializer = ProfileSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['user_profile'] = request.user
        # serializer.validated_data['faculty'] = faculty
        try:
            serializer.save()
        except IntegrityError as e:
            
            return Response({'message': "Information is already created"})
        return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)

    def put(self, request):
        user_info = self.get_user_info(request.user.id)
        serializer = ProfileSerializer(
            user_info, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
