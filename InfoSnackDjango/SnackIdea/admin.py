from django.contrib import admin
from .models import AnswertoQuestionsPerUser, QuestionList, UserInformation
from import_export.admin import ImportExportModelAdmin
from import_export import resources

# Register your models here.




## For Import export facility in the admin panel
## Resources
class AnswertoQuestionsPerUserResource(resources.ModelResource):
    class Meta:
        model = AnswertoQuestionsPerUser

class QuestionListResource(resources.ModelResource):
    class Meta:
        model = QuestionList


class UserInformationResource(resources.ModelResource):
    class Meta:
        model = UserInformation


## Admin
class AnswertoQuestionsPerUserAdmin(ImportExportModelAdmin):
    resource_class = AnswertoQuestionsPerUserResource


class QuestionListAdmin(ImportExportModelAdmin):
    resource_class = QuestionListResource


class UserInformationAdmin(ImportExportModelAdmin):
    resource_class = UserInformationResource


admin.site.register(AnswertoQuestionsPerUser, AnswertoQuestionsPerUserAdmin)
admin.site.register(QuestionList, QuestionListAdmin)
admin.site.register(UserInformation, UserInformationAdmin)
