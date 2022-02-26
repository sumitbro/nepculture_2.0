# Generated by Django 3.2.4 on 2021-06-21 17:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('user_profile', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='user_info', serialize=False, to='accounts.user')),
                ('first_name', models.CharField(blank=True, max_length=120)),
                ('last_name', models.CharField(blank=True, max_length=120)),
                ('bio', models.TextField(blank=True, max_length=500)),
                ('location', models.CharField(blank=True, max_length=30)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('city', models.CharField(blank=True, default='', max_length=30, null=True)),
                ('country', models.CharField(blank=True, default='', max_length=30, null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='created',
        ),
        migrations.RemoveField(
            model_name='user',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='user',
            name='is_staff',
        ),
        migrations.RemoveField(
            model_name='user',
            name='modified',
        ),
        migrations.RemoveField(
            model_name='user',
            name='phone',
        ),
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
