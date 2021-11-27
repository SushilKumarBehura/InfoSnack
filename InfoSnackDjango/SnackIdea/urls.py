from django.urls import path, include
from rest_framework import routers
from .viewsets import UserInformationViewset, QuestionListViewset, AnswertoQuestionsPerUserViewset


app_name = 'SnackIdea'

router = routers.DefaultRouter()
router.register(r'userinformation', UserInformationViewset)
router.register(r'questionlist', QuestionListViewset)
router.register(r'answertoquestions', AnswertoQuestionsPerUserViewset)


urlpatterns = [
    path('api/', include(router.urls)), 
]
