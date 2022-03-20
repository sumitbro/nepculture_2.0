from django.db import models

# Create your models here.

CATEGORY_CHOICES=(
    ('CA','Canvas Art'),
    ('S', 'Sculpture'),
    ('WC', 'Wood craft'),
    ('MI', 'Musical instrument'),
    ('H', 'Handicraft'),
    ('A', 'Antique'),
    ('S', 'Statue'),
    ('P', 'Painting'),
    ('MA', 'Mithila Art'),
    

)
class Item(models.Model):
    category= models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    title= models.CharField(max_length=50)
    price= models.FloatField()
    slug= models.SlugField()
    descreption= models.TextField()
    image= models.ImageField()

    def __str__(self):
        return self.title

