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
            errorMessages.append(error)
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        queried_user = User.query.get(current_user.id)
        user = current_user.to_dict()
        user['song_list']= [song.to_dict() for song in queried_user.songs]
        user['album_list']= [album.to_dict() for album in queried_user.albums]
        user['playlist_list']= [playlist.to_dict() for playlist in queried_user.playlists]
        user['comment_list']= [comment.to_dict() for comment in queried_user.comments]
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
        login_user(user, remember=True, force=True)

        queried_user = User.query.get(current_user.id)
        user = current_user.to_dict()
        user['song_list']= [song.to_dict() for song in queried_user.songs]
        user['album_list']= [album.to_dict() for album in queried_user.albums]
        user['playlist_list']= [playlist.to_dict() for playlist in queried_user.playlists]
        user['comment_list']= [comment.to_dict() for comment in queried_user.comments]
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
