from django.shortcuts import render
# Create your views here.
# Create your views here.
# -*- coding: utf-8 -*-
from django.views.generic import CreateView, ListView
from django.template import Template, Context

def home(request):
        return render(request,'default.html')

'''
class Lista(ListView):
        template_name = 'lista.html'
        context_object = 'nome'
        fields = "__all__" 
'''
def default(request):
    context = {
        'title':'PLATAFORMA DE LMS DA IMPACTA'
    }
    return render(request, 'default.html', context)

    

