from .db import db, environment, SCHEMA, add_prefix_for_prod

class Album(db.Model):
    __tablename__ = 'albums'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    description = db.Column(db.String(300), nullable=False)
    genre = db.Column(db.String(300))

    user = db.relationship('User', back_populates='albums')
    songs = db.relationship('Song', back_populates='album')

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'user_id':self.user_id,
            'description':self.description,
            'genre':self.genre
        }
