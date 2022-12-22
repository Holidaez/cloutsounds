from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Song

class SongForm(FlaskForm):
    userId = IntegerField('userId')
    genre= StringField('genre')
    title= StringField('genre')
