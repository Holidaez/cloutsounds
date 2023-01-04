from flask import Blueprint, jsonify, request, json
from .auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from app.forms import SongForm
from app.models import Song, db
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)
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
        comment_list=[]
        if (song.comments):
            for comment in song.comments:
                comment_dict = comment.to_dict()
                comment_list.append(comment_dict)
        song_dict = song.to_dict()
        user_dict = song.user.to_dict()
        song_dict['user'] = user_dict
        song_dict['comments'] = comment_list
        song_list.append(song_dict)
    return {'songs':song_list}


@song_routes.route('/add', methods=['POST'])
def add_song():
    """
    Adds a Song to the Database
    """
    if "audio" not in request.files:
        print("INSIDE OF audio_FILE IF")
        return {"errors:Song File required"},400
    audio = request.files["audio"]
    if not allowed_file(audio.filename):
        print("INSIDE OF ALLOWED FILE ERROR")
        return {"errors": "file type not permitted"},400
    audio.filename = get_unique_filename(audio.filename)

    upload = upload_file_to_s3(audio)

    if "url" not in upload:
        print(upload)
        print("INSIDE OF URL ERROR", upload)
        return upload, 400

    url = upload["url"]

    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    new_song = Song(user_id=form.data['userId'],song_file=url, genre=form.data['genre'],title=form.data['title'])
    db.session.add(new_song)
    db.session.commit()
    return {'url':url}

@song_routes.route('/edit', methods=['POST'])
def updateSong():
    """
    Edits a specific song by Song Id
    """
    # songId = request.files['songId']
    form = SongForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        song_to_edit = Song.query.filter(Song.id == form.data['songId']).first()
        song_to_edit.genre = form.data['genre']
        song_to_edit.title = form.data['title']
        db.session.commit()
        returning_song = song_to_edit.to_dict()
        return returning_song
    return {'errors': validation_errors_to_error_messages(form.errors)},401

@song_routes.route('/specific/song', methods=['POST'])
def get_specific_song():
    """
    Gets a specific song by Song Id
    """
    #formData.get() request.body
    songId = json.loads(request.data.decode('UTF-8'))
    current_song = Song.query.filter(Song.id == songId['songId']).first()
    returning_song = current_song.to_dict()
    comment_list = []
    if (current_song.comments):
        for comment in current_song.comments:
            comment_dict = comment.to_dict()
            comment_user = comment.user.to_dict()
            comment_dict['username'] = comment_user.get('username')
            comment_list.append(comment_dict)
    returning_song['comments'] = comment_list

    return returning_song


@song_routes.route('/<id>', methods=['DELETE'])
def delete_song(id):
    todelete = Song.query.get(id)
    db.session.delete(todelete)
    db.session.commit()
    return {"deleteMessage":'Song Successfully Deleted'}
