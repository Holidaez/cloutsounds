from app.models import db, Like, environment, SCHEMA


def seed_likes():
    # like1 = Like(

    # )
    db.session.add()
    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM likes")

    db.session.commit()
