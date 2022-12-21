from .db import db, environment, SCHEMA, add_prefix_for_prod

class Playlist(db.Model):
    __tablename__ = 'playlists'

    if environment =="production":
        __table_args__={'schema':SCHEMA}

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(30), nullable=False)
    description = db.Column(db.String(300), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    songs = db.relationship('Song', back_populates='playlist')
    user = db.relationship('User', back_populates='playlists')

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'user_id':self.user_id,
            'description':self.description
        }
