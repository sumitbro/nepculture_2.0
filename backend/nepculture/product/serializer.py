from rest_framework import serializers
from .models import Cartitem, Item, Store, Product, Cart


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model= Item
        fields= ['id', 'category', 'title', 'price', 'slug', 'descreption', 'image']
        

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model= Store
        fields= ['id','userId', 'name', 'create_at']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields= ['id', 'category','title', 'storeId',  'price', 'slug', 'condition', 'descreption', 'image','create_at']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cart
        fields= ['id', 'userId','quantity']

class CartitemSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cartitem
        fields= ['id','cartId', 'productId','quantity', 'create_at']




class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model= Item
        fields= ['id', 'category', 'title', 'price', 'slug', 'descreption', 'image']

    
    
    
    
    
