# Generated by Django 3.0.2 on 2020-01-17 04:39

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tracks', '0004_likes'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Likes',
            new_name='Like',
        ),
    ]
