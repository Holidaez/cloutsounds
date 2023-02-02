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
    song9 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song10 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song11 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song12 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song13 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song14 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song15 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song16 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song17 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song18 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song19 = Song(
        title = 'Brainfluid',
        genre = 'RNB',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song20 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song21 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song22 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song23 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song24 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song25 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song26 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song27 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song28 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song29 = Song(
        title = 'Brainfluid',
        genre = 'Hip-Hop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song30 = Song(
        title = 'Brainfluid',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/cinim-brainfluid-122844.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song31 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song32 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song33 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song34 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song35 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song36 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song37 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song38 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song39 = Song(
        title = 'Drop It',
        genre = 'Pop',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song40 = Song(
        title = 'Drop It',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song41 = Song(
        title = 'Drop It',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song42 = Song(
        title = 'Drop It',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song43 = Song(
        title = 'Drop It',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/drop-it-124014.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song44 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song45 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song46 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song47 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song48 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song49 = Song (
        title = 'Mountain Path',
        genre = 'Metal',
        song_file = 'https://cloutsounds.s3.amazonaws.com/mountain-path-125573.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song50 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song51 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song52 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song53 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song54 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song55 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song56 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song57 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song58 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song59 = Song (
        title = 'Password Infinity',
        genre = 'Jazz',
        song_file = 'https://cloutsounds.s3.amazonaws.com/password-infinity-123276.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song60 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song61 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song62 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song63 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song64 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song65 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song66 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song67 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song68 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song69 = Song (
        title = 'Weeknds',
        genre = 'Country',
        song_file = 'https://cloutsounds.s3.amazonaws.com/weeknds-122592.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song70 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song71 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song72 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song73 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song74 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song75 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song76 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song77 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song78 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song79 = Song (
        title = 'Calm My Mind',
        genre = 'EDM',
        song_file = 'https://cloutsounds.s3.amazonaws.com/please-calm-my-mind-125566.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song80 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song81 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song82 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song83 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song84 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song85 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song86 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song87 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song88 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
        song_file = 'https://cloutsounds.s3.amazonaws.com/the-beat-of-nature-122841.mp3',
        user_id = 1,
        playlist_id = 1,
        album_id = 1
    )
    song89 = Song (
        title = 'Beast Of Nature',
        genre = 'Rock',
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
    db.session.add(song9)
    db.session.add(song10)
    db.session.add(song11)
    db.session.add(song12)
    db.session.add(song13)
    db.session.add(song14)
    db.session.add(song15)
    db.session.add(song16)
    db.session.add(song17)
    db.session.add(song18)
    db.session.add(song19)
    db.session.add(song20)
    db.session.add(song21)
    db.session.add(song22)
    db.session.add(song23)
    db.session.add(song24)
    db.session.add(song25)
    db.session.add(song26)
    db.session.add(song27)
    db.session.add(song28)
    db.session.add(song29)
    db.session.add(song30)
    db.session.add(song31)
    db.session.add(song32)
    db.session.add(song33)
    db.session.add(song34)
    db.session.add(song35)
    db.session.add(song36)
    db.session.add(song37)
    db.session.add(song38)
    db.session.add(song39)
    db.session.add(song40)
    db.session.add(song41)
    db.session.add(song42)
    db.session.add(song43)
    db.session.add(song44)
    db.session.add(song45)
    db.session.add(song46)
    db.session.add(song47)
    db.session.add(song48)
    db.session.add(song49)
    db.session.add(song50)
    db.session.add(song51)
    db.session.add(song52)
    db.session.add(song53)
    db.session.add(song54)
    db.session.add(song55)
    db.session.add(song56)
    db.session.add(song57)
    db.session.add(song58)
    db.session.add(song59)
    db.session.add(song60)
    db.session.add(song61)
    db.session.add(song62)
    db.session.add(song63)
    db.session.add(song64)
    db.session.add(song65)
    db.session.add(song66)
    db.session.add(song67)
    db.session.add(song68)
    db.session.add(song69)
    db.session.add(song70)
    db.session.add(song71)
    db.session.add(song72)
    db.session.add(song73)
    db.session.add(song74)
    db.session.add(song75)
    db.session.add(song76)
    db.session.add(song77)
    db.session.add(song78)
    db.session.add(song79)
    db.session.add(song80)
    db.session.add(song81)
    db.session.add(song82)
    db.session.add(song83)
    db.session.add(song84)
    db.session.add(song85)
    db.session.add(song86)
    db.session.add(song87)
    db.session.add(song88)
    db.session.add(song89)


    db.session.commit()

def undo_songs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM songs")

    db.session.commit()
