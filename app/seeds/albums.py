from app.models import db, Album, environment, SCHEMA


def seed_albums():
    album1 = Album(
        name = 'The best Album Out',
        user_id = 1,
        description = 'The hotest album on the market right now',
        genre = 'Hip-Hop',
    )
    db.session.add(album1)
    db.session.commit()

def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM albums")

    db.session.commit()
