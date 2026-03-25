from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'categoryId': product.category_id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'likes': product.likes,
        'image': product.image,
        'images': product.images,
        'link': product.link,
        'isFavourite': product.is_favourite,
        'rating': product.rating,
        'category': product.category.name,
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


@require_http_methods(['GET'])
def product_list(request):
    products = Product.objects.select_related('category').all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)


@require_http_methods(['GET'])
def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(id=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


@require_http_methods(['GET'])
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)


@require_http_methods(['GET'])
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


@require_http_methods(['GET'])
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.select_related('category').filter(category=category)
        return JsonResponse([product_to_dict(p) for p in products], safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
