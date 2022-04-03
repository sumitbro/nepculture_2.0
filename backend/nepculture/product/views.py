from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework .parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .models import Cartitem, Item, Product, Cart, Store
from .serializer import ItemSerializer, ProductSerializer, CartSerializer, CartitemSerializer, StoreSerializer
from rest_framework.views import APIView
from rest_framework import filters
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, UpdateAPIView, RetrieveAPIView, RetrieveUpdateAPIView, RetrieveUpdateDestroyAPIView

from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
import os
# Create your views here.


class Itemlist(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    # authentication_classes= [JWTAuthentication]
    # permission_classes= [IsAuthenticated]


class Itemretriveupdate(RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class Itemcreate(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


@csrf_exempt
def product_list(request):
    if request.method=="GET":
        products= Product.objects.all().order_by('create_at').reverse()
        serializer= ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method=="POST":
        data= JSONParser().parse(request)
        serializer= ProductSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def product_list(request):
    if request.method=="GET":
        products= Product.objects.all().order_by('create_at').reverse()
        serializer= ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method=="POST":
        data= JSONParser().parse(request)
        serializer= ProductSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def product_by_id(request, pk):

    try:
        product= Product.objects.get(pk=id)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= ProductSerializer(product)
        return JsonResponse(serializer.data)
    elif request.method=="PUT":
        data= JSONParser().parse(request)
        serializer= ProductSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method=="DELETE":
        product.delete()
        return HttpResponse(status=201)



    
@csrf_exempt
def product_seller(request, storeId):

    try:
        product= Product.objects.get(storeId=storeId)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)
    


@csrf_exempt
def product_by_category(request, category):

    try:
        product= Product.objects.filter(category=category)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def cart_list(request):

    if request.method=="POST":
        data= JSONParser().parse(request)
        serializer= CartSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    return  HttpResponse("empty cart")


@csrf_exempt
def cart_by_user_id(request, userId):

    try:
        cart= Cart.objects.filter(userId=userId)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= CartSerializer(cart, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method=="PUT":
        data= JSONParser().parse(request)
        serializer= CartSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method=="DELETE":
        cart.delete()
        return HttpResponse(status=201)

@csrf_exempt
def cart_item_list(request):

    if request.method=="POST":
        data= JSONParser().parse(request)
        serializer= CartitemSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def cart_item_by_id(request, pk):

    try:
        cartitem= Cartitem.objects.get(pk=pk)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= CartitemSerializer(cartitem, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method=="PUT":
        data= JSONParser().parse(request)
        serializer= CartitemSerializer(data=data)
        if serializer.is_valid:
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    elif request.method=="DELETE":
        cartitem.delete()
        return HttpResponse(status=201)
    



@csrf_exempt
def cart_item_by_cart_id(request, cartId):

    try:
        cartitem= Cartitem.objects.filter(cartId=cartId)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= CartitemSerializer(cartitem, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_cart_item_by_cart_id(request, cartId):

    try:
        cartitem= Cartitem.objects.filter(cartId=cartId).prefetch_related('productId').order_by('create_at')
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= CartitemSerializer(cartitem, many=True)
        return JsonResponse(serializer.data, safe=False)


    

@csrf_exempt
def cart_item_same_product(request, cartId, productId):

    try:
        cartitem= Cartitem.objects.filter(cartId=cartId).filter(productId=productId)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= CartitemSerializer(cartitem, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def create_store(request):

    if request.method=="POST":
        data= JSONParser().parse(request)
        print(data)
        serializer= StoreSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def get_store(request, userId):

    try:
        store= Store.objects.filter(userId=userId)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= StoreSerializer(store, many=True)
        return JsonResponse(serializer.data, safe=False)

# @csrf_exempt
# def filter_range_price(request, minprice, maxprice):

#     try:
#         product= Product.objects.filter(price__range(minprice, maxprice))
#     except:
#         return HttpResponse(status=404)
#     if request.method=="GET":
#         serializer= ProductSerializer(product, many=True)
#         return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def filter_min_price(request, minprice):

    try:
        product= Product.objects.filter(price__gte=minprice)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def filter_max_price(request, maxprice):

    try:
        product= Product.objects.filter(price__lte=maxprice)
    except:
        return HttpResponse(status=404)
    if request.method=="GET":
        serializer= ProductSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)




class search_product(ListAPIView):
    search_fields= ('title', 'description', 'category')
    filter_backends= (filters.SearchFilter)
    queryset= Product.objects.all()
    sserializer_class = ProductSerializer