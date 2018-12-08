from django.shortcuts import render
import json
# from rest_framework import serializers
from django.core import serializers
from .models import Book
from django.views.decorators.http import require_http_methods
from django.http import HttpResponse, JsonResponse

# Create your views here.
@require_http_methods(["GET"])
def add_book(request):
    response = {}
    try:
        book_name = request.GET.get('book_name')
        book = Book(book_name=book_name)
        book.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    # return json.dumps(response)
    return JsonResponse(response)

    # return HttpResponse(json.dumps(response), content_type="application/json")

@require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        books = Book.objects.filter()
        response['list'] = json.loads(serializers.serialize("json", books))
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)
