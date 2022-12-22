from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import Song

class SongForm(FlaskForm):
    songId = IntegerField('songId')
    userId = IntegerField('userId', validators=[DataRequired()])
    genre= StringField('genre', validators=[DataRequired(), Length(min=3, max=30, message='Minimum length of 3 Characters and a max length of 29 characters')])
    title= StringField('title', validators=[DataRequired(), Length(min=3, max=30, message='Minimum Title length of 3 Characters and a max length of 29 characters')])
