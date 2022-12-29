from flask import Blueprint, jsonify, request, json
from .auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from app.forms import CommentForm
from app.models import Comment, db
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

comment_routes = Blueprint('comments', __name__)



@comment_routes.route('/add', methods=['POST'])
def add_comment():
    """
    Adds a Comment to a song
    """
    comment = json.loads(request.data.decode('UTF-8'))
    # print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",comment)
    if (len(comment['commentText'])) > 70 or (len(comment['commentText']) < 3):
        return {'errors':['Comments must be between 3 and 70 characters']},400
    # print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "IN COMMENT ROUTE")
    # form = CommentForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # print("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", form.data)
    # if form.validate_on_submit():
    new_comment = Comment(user_id=comment['userId'], comment_text=comment['commentText'],song_id=comment['songId'])
    db.session.add(new_comment)
    db.session.commit()
    return {'comment':'new_comment'}
    # return {'errors': validation_errors_to_error_messages(form.errors)},400

@comment_routes.route('/edit/<id>', methods=['PUT'])
def updateComment(id):
    """
    edits a specific comment by comment Id
    """
    comment = json.loads(request.data.decode('UTF-8'))
    if (len(comment['commentText'])) > 70 or (len(comment['commentText']) < 3):
        return {'errors':['Comments must be between 3 and 70 characters']},400
    comment_to_edit = Comment.query.get(id)
    comment_to_edit.comment_text = comment['commentText']
    db.session.commit()
    return {'Message':'Comment successfully edited'}

@comment_routes.route('/<id>', methods=['DELETE'])
def delete_comment(id):
    todelete = Comment.query.get(id)
    db.session.delete(todelete)
    db.session.commit()
    return {"delteMessage":'Comment Successfully Deleted'}
