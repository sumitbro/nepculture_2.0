# Generated by Django 3.2.4 on 2022-03-26 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20210621_2348'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.IntegerField(null=True),
        ),
    ]
