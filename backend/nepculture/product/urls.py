from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('item/', views.Itemlist.as_view()),
    path('item/<int:pk>', views.Itemretriveupdate.as_view()),

    
]


