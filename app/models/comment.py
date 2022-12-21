from .db import db, environment, SCHEMA, add_prefix_for_prod

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment =="production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    song_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('songs.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    comment_text = db.Column(db.String(300), nullable=False)

    user = db.relationship('User', back_populates='comments')
    song = db.relationship('Song', back_populates='comments')

    def to_dict(self):
        return{
            'id':self.id,
            'song_id':self.song_id,
            'user_id':self.user_id,
            'comment_text':self.comment_text
        }
