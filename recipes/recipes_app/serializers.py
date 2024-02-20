from .models import *
from rest_framework import serializers


class DishSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dish
        fields = ['id', 'name', 'category', 'photo', 'description']


class StepSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Step
        fields = ['id', 'dish', 'description', 'photo']