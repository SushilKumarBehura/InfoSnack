from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import UserInformationSerializer, QuestionListSerializer, AnswertoQuestionsPerUserSerializer
from .models import AnswertoQuestionsPerUser, QuestionList, UserInformation
# Create your views here.


class UserInformationViewset(viewsets.ModelViewSet):
    queryset = UserInformation.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserInformationSerializer



class QuestionListViewset(viewsets.ModelViewSet):
    queryset = QuestionList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuestionListSerializer



class AnswertoQuestionsPerUserViewset(viewsets.ModelViewSet):
    queryset = AnswertoQuestionsPerUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AnswertoQuestionsPerUserSerializer