from django.urls import path, include, re_path
from accounts import views
from .views import UserInfoAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [

    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
    path('profile/', UserInfoAPIView.as_view(), name="student-info"),
    # path('profile/', views.UserProfileDetail.as_view())

    
]