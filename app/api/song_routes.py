from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song

song_routes = Blueprint('users', __name__)


@song_routes.route('/')
@login_required
def songs():
    """
    Query for all songs and returns them in a list of song dictionaries
    """
    songs = Song.query.all()
    print(songs)
    return {'songs': [song.to_dict() for song in songs]}
