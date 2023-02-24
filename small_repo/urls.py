from django.urls import path, include

API = 'api/'
VERSION = 'v1/'

urlpatterns = [
    # redirect to react front
    path('', include('frontend.urls')),
]
