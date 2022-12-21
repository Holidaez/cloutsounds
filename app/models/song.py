from .db import db, environment, SCHEMA, add_prefix_for_prod

class Song(db.Model):
    __tablename__ = 'songs'

    if environment =="production":
        __table_args__={'schema':SCHEMA}
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(30), nullable=False)
    genre = db.Column(db.String(30), nullable=False)
    song_file = db.Column(db.String(1000), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    playlist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('playlists.id')), nullable=True)
    album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('albums.id')), nullable=True)

    user = db.relationship('User', back_populates='songs')
    playlist = db.relationship('Playlist', back_populates='songs')
    album = db.relationship('Album',back_populates='songs')
    comments = db.relationship('Comment', back_populates='song')

    def to_dict(self):
        return {
            'id': self.id,
            'title':self.title,
            'genre':self.genre,
            'song_file':self.song_file,
            'user_id':self.user_id,
            'playlist_id':self.playlist_id,
            'album_id':self.album_id
        }
