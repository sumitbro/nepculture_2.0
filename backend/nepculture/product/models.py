from contextlib import nullcontext
from multiprocessing import Condition
from operator import mod
from turtle import title
from unicodedata import category
from django.db import models
from accounts import models as usermodel

# Create your models here.

CATEGORY_CHOICES=(
    ('Canvas Art','Canvas Art'),
    ('Sculpture', 'Sculpture'),
    ('Wood craft', 'Wood craft'),
    ('Musical instrument', 'Musical instrument'),
    ('Handicraft', 'Handicraft'),
    ('Antique', 'Antique'),
    ('Statue', 'Statue'),
    ('Painting', 'Painting'),
    ('Mithila Art', 'Mithila Art'),
    

)


class Store(models.Model):
    userId= models.ForeignKey(usermodel.User, on_delete=models.CASCADE, null=True)
    name= models.CharField(max_length=100, null=True)
    create_at= models.DateTimeField(auto_now_add=True, null=True)

    # def __str__(self):
    #     return str(self.name)
    def __str__(self) -> str:
        return f"{self.name} of {self.userId}"

      
class Product(models.Model):
    category= models.CharField(choices=CATEGORY_CHOICES, max_length=200, null=True)
    title= models.CharField(max_length=300, null=True)
    storeId= models.ForeignKey(Store,  on_delete=models.CASCADE, null=True)
    
    price= models.FloatField(null=True)
    slug= models.SlugField(null=True)
    condition= models.CharField(max_length=100, null=True)
    descreption= models.TextField(null=True)
    image= models.ImageField(null=True)
    create_at= models.DateTimeField(auto_now_add=True, null=True) 

    def __str__(self):
        return self.title

class Cart(models.Model):
    userId= models.ForeignKey(usermodel.User, on_delete=models.CASCADE, null=True)
    quantity= models.IntegerField(null=True)
    def __str__(self) -> str:
        return f"{self.userId.username} having {self.quantity} items"



class Cartitem(models.Model):
    cartId= models.ForeignKey(Cart, on_delete=models.CASCADE, null=True)
    productId= models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    quantity= models.IntegerField(null=True)
    create_at= models.DateTimeField(auto_now_add=True, null=True)
    def __str__(self) -> str:
        return f"{self.cartId} "


    

class Item(models.Model):
    category= models.CharField(choices=CATEGORY_CHOICES, max_length=200)
    title= models.CharField(max_length=50)
    price= models.FloatField()
    slug= models.SlugField()
    descreption= models.TextField()
    image= models.ImageField()

    def __str__(self):
        return self.title

