from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import Comment

class CommentForm(FlaskForm):
    songId = IntegerField('songId')
    userId = IntegerField('userId')
    commentText = StringField('commentText', validators=[DataRequired(), Length(min=3,max=70, message='Comments must be between 3 and 70 characters')])
