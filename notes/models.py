from django.db import models
import datetime


class Note(models.Model):
    title = models.CharField(max_length=300, null=False)
    summary = models.TextField(null=False, default="No Summary")
    body_text = models.TextField(null=False)
    created_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.title
