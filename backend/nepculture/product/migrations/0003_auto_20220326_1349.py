# Generated by Django 3.2.4 on 2022-03-26 08:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0002_store'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(null=True)),
                ('userId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RenameField(
            model_name='store',
            old_name='userid',
            new_name='userId',
        ),
        migrations.AddField(
            model_name='store',
            name='create_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='store',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('Canvas Art', 'Canvas Art'), ('Sculpture', 'Sculpture'), ('Wood craft', 'Wood craft'), ('Musical instrument', 'Musical instrument'), ('Handicraft', 'Handicraft'), ('Antique', 'Antique'), ('Statue', 'Statue'), ('Painting', 'Painting'), ('Mithila Art', 'Mithila Art')], max_length=200),
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300, null=True)),
                ('category', models.CharField(choices=[('Canvas Art', 'Canvas Art'), ('Sculpture', 'Sculpture'), ('Wood craft', 'Wood craft'), ('Musical instrument', 'Musical instrument'), ('Handicraft', 'Handicraft'), ('Antique', 'Antique'), ('Statue', 'Statue'), ('Painting', 'Painting'), ('Mithila Art', 'Mithila Art')], max_length=200, null=True)),
                ('price', models.FloatField(null=True)),
                ('slug', models.SlugField(null=True)),
                ('condition', models.CharField(max_length=100, null=True)),
                ('descreption', models.TextField(null=True)),
                ('image', models.ImageField(null=True, upload_to='')),
                ('create_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('storeId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='product.store')),
            ],
        ),
        migrations.CreateModel(
            name='Cartitem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(null=True)),
                ('create_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('cartId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='product.cart')),
                ('productId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
    ]
