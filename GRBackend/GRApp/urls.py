from django.conf import settings
from django.urls import re_path as url
from GRApp import views
from django.conf.urls.static import static

urlpatterns=[
    url(r'^book/$', views.book_api),
    url(r'^book/([0-9]+)$', views.book_api),

    url(r'^author/$', views.author_api),
    url(r'^author/([0-9]+)$', views.author_api),

    url(r'^myBook/$', views.my_book_api),
    url(r'^myBook/([0-9]+)$', views.my_book_api),

            ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
