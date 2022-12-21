from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Song

song_routes = Blueprint('songs', __name__)


@song_routes.route('/')
# @login_required
def songs():
    """
    Query for all songs and returns them in a list of song dictionaries
    """
    songs = Song.query.all()
    song_list = []
    for song in songs:
        song_dict = song.to_dict()
        user_dict = song.user.to_dict()
        song_dict['user'] = user_dict
        song_list.append(song_dict)
    return {'songs':song_list}
