from django.urls import path, include, re_path

from . import views

urlpatterns = [
    path('item/', views.Itemlist.as_view()),
    path('item/<int:pk>', views.Itemretriveupdate.as_view()),
    path('showitemcart/<int:cartId>', views.get_cart_item_by_cart_id),
    path('store/', views.create_store),
    path('store/<int:userId>', views.get_store),
    path('product/', views.product_list),
    path('product/search', views.search_product.as_view()),
    path('product/<int:pk>', views.product_by_id),
    path('product/find/<str:category>/', views.product_by_category),

    path('product/store/<int:storeId>', views.product_seller),
    path('cart/', views.cart_list),
    path('cart/<int:userId>', views.cart_by_user_id),
    path('cartitemlist/>', views.cart_item_list),
    path('cartitem/<int:cartId>', views.cart_item_by_cart_id),
    path('cartitem/id/<int:pk>', views.cart_item_by_id),
    path('cart_item_same_product/<int:cartId>/<int:productId>', views.cart_item_same_product),
    path('filter/price/min/<int:minprice>', views.filter_min_price),
    path('filter/price/max/<int:maxprice>', views.filter_max_price),
    




    
]


