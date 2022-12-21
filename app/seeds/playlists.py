from app.models import db, Playlist, environment, SCHEMA


def seed_playlists():
    playlist1 = Playlist(
        name = 'The best playlist',
        description= 'We only add the best music',
        user_id = 1
    )
    db.session.add(playlist1)
    db.session.commit()

def undo_playlists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM playlists")

    db.session.commit()
