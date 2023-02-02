from flask import Blueprint, jsonify, request, json
from .auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from app.models import Like, db

like_routes = Blueprint('likes', __name__)

@like_routes.route('/add',methods=['POST'])
def add_like():
    """
    Adds A like
    """
    like = json.loads(request.data.decode('UTF-8'))
    # print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", like)
    new_like = Like(user_id=like['userId'],song_id=like['songId'])
    db.session.add(new_like)
    db.session.commit()
    return {'like': 'new_like'}

@like_routes.route('/<id>', methods=['DELETE'])
def delete_like(id):
    todelete = Like.query.get(id)
    db.session.delete(todelete)
    db.session.commit()
    return {"delteMessage":'Like Successfully Deleted'}
