from django.shortcuts import render, get_object_or_404
from django.views.generic import (TemplateView, ListView, DetailView, UpdateView, DeleteView, )
from rest_framework import viewsets
from rest_framework import permissions
import django_filters
import json
from .models import *
from .serializers import *


class DishViewset(viewsets.ModelViewSet):
   queryset = Dish.objects.all()
   serializer_class = DishSerializer
   filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
   filterset_fields = ["category"]


class StepViewset(viewsets.ModelViewSet):
   queryset = Step.objects.all()
   serializer_class = StepSerializer
   filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
   filterset_fields = ["dish"]
