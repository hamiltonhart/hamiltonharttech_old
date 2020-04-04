from django.contrib import admin
from django.urls import path, include, re_path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from .views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    re_path(r'^', FrontendAppView.as_view()),
]
