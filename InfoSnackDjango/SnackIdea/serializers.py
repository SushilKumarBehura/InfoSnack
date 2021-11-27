from rest_framework import serializers
from .models import AnswertoQuestionsPerUser, QuestionList, UserInformation


class UserInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInformation
        fields = "__all__"


class QuestionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionList
        fields = "__all__"


class AnswertoQuestionsPerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswertoQuestionsPerUser
        fields = "__all__"