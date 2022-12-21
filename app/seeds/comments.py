from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    comment1 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    comment2 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    comment3 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    comment4 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    comment5 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    comment6 = Comment(
        song_id = 1,
        user_id = 1,
        comment_text = 'This song is lit'
    )
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
