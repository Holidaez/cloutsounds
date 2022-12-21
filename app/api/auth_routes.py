from flask import Blueprint, jsonify, session, request
from app.models import User,Song, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        queried_user = User.query.get(current_user.id)
        print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", queried_user.comments)
        user_song_list = []
        user_comment_list = []
        user_album_list = []
        user_playlist_list = []
        user = current_user.to_dict()

        for song in queried_user.songs:
            song_dict = song.to_dict()
            user_song_list.append(song_dict)

        for album in queried_user.albums:
            album_dict = album.to_dict()
            user_album_list.append(album_dict)

        for playlist in queried_user.playlists:
            playlist_dict = playlist.to_dict()
            user_playlist_list.append(playlist_dict)

        for comment in queried_user.comments:
            comment_dict = comment.to_dict()
            user_comment_list.append(comment_dict)

        user['song_list'] = user_song_list
        user['albums'] = user_album_list
        user['playlists'] = user_playlist_list
        user['comments'] = user_comment_list

        return user

    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        
        queried_user = User.query.get(current_user.id)
        print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", queried_user.comments)
        user_song_list = []
        user_comment_list = []
        user_album_list = []
        user_playlist_list = []
        user = current_user.to_dict()

        for song in queried_user.songs:
            song_dict = song.to_dict()
            user_song_list.append(song_dict)

        for album in queried_user.albums:
            album_dict = album.to_dict()
            user_album_list.append(album_dict)

        for playlist in queried_user.playlists:
            playlist_dict = playlist.to_dict()
            user_playlist_list.append(playlist_dict)

        for comment in queried_user.comments:
            comment_dict = comment.to_dict()
            user_comment_list.append(comment_dict)

        user['song_list'] = user_song_list
        user['albums'] = user_album_list
        user['playlists'] = user_playlist_list
        user['comments'] = user_comment_list

        return user
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
