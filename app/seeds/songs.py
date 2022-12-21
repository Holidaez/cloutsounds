from app.models import db, Song, environment, SCHEMA

def seed_songs():
    song1 = Song(
        title = 'Life Like',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/lifelike-126735.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song2 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song3 = Song(
        title = 'Drop It',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song4 = Song (
        title = 'Mountain Path',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song5 = Song (
        title = 'Password Infinity',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song6 = Song (
        title = 'Weeknds',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song7 = Song (
        title = 'Calm My Mind',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song8 = Song (
        title = 'Beast Of Nature',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    db.session.add(song1)
    db.session.add(song2)
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(song5)
    db.session.add(song6)
    db.session.add(song7)
    db.session.add(song8)
    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM songs")

    db.session.commit()
