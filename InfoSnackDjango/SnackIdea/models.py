from django.db import models
import uuid
# Create your models here.


class UserInformation(models.Model):
    user_name = models.CharField(max_length=100)
    url_key = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, blank=True)
    
    ## Take care from frontend and put inside it so can later split using .split("+++") or similar
    ## Put this current_three_words into three_words in AnswertoQuestionPerUser.
    current_three_words = models.CharField(max_length=1000, blank=True)     

    def __str__(self):
        return self.user_name

class QuestionList(models.Model):
    question_id = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, blank=True)
    question = models.CharField(max_length=5000, blank=True) 

    def __str__(self):
        return self.question

class AnswertoQuestionsPerUser(models.Model):
    ans_que_table_id = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, blank=True)
    user_ref_id = models.ForeignKey(UserInformation, on_delete=models.CASCADE)
    question_ref_id = models.ForeignKey(QuestionList, on_delete=models.CASCADE)
    answer_given = models.TextField()
    three_words = models.CharField(max_length=1000, blank=True)      ## Take care from frontend and put inside it so can later split using .split("+++") or similar
    liked_integer = models.IntegerField()

    def __str__(self):
        return self.answer_given

