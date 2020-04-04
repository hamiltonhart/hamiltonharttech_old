from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from .views import ReactAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", ReactAppView.as_view()),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
