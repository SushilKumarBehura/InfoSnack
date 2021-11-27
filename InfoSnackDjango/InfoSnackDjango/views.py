from django.shortcuts import render

# Create your views here.


def FrontendRender(request):
    return render(request, "build/index.html")

