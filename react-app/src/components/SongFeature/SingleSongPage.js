import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { setCurrentSong } from "../../store/currentSong"
import { getTheSelectedSong, SelectTheSong } from "../../store/selectedSong"
import CreateComment from "../commentsFeature/CreateComments"
import IndividualComments from "../commentsFeature/IndivdualComments"

import './SingleSongPage.css'

const SingleSongPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { songId } = useParams()
    const playingSong = useSelector(state => state.currentSong)
    const song = useSelector(state => state.selectedSong)
    const commentList = useSelector(state => state.selectedSong.comments)
    const user = useSelector(state => state.session.user)
    const [commentDeleting, setCommentDeleting] = useState(false)
    useEffect(async () => {
        const testName = {
            songId: songId
        }
        await dispatch(getTheSelectedSong(testName))
    }, [commentDeleting])
    const setAudioFile = (e, value) => {
        e.preventDefault();
        console.log(value)
        dispatch(setCurrentSong(value))
    }
    const redirectToSongEdit = (e, value) => {
        e.preventDefault()
        console.log(value)
        let path = `/edit/${value.id}`
        history.push(path)
    }
    const deleteSong = async (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (playingSong.id == song.id) {
            dispatch(setCurrentSong(''))
        }
        const response = await fetch(`/api/songs/${song.id}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            const res = response.json()
            if (res.errors) {
                return alert(res.errors.map(error => error))
            } else {

                history.push(`/`)
            }
        }
    }
    const userId = useSelector(state => state.session.user.id)
    const [commentText, setCommentText] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        setCommentDeleting(true)
        const commentz = {
            songId: parseInt(songId),
            userId: userId,
            commentText: commentText
        }
        console.log(JSON.stringify(commentz))
        const response = await fetch('/api/comments/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentz)
        })
        const res = await response.json()
        console.log(res)
        if (res.errors) {
            return alert(res.errors.map(error => error))
        } else {
            setCommentText('')
            setCommentDeleting(false)
        }
    }
    //! Likes CRUD
    let liked;
    if (song.likes) {
        liked = song.likes.filter(song => song.user_id === userId)
        console.log(liked)
    }
    const likeSong = async (e) => {
        e.preventDefault()
        setCommentDeleting(true)
        const like = {
            songId: parseInt(songId),
            userId: userId
        }
        const response = await fetch('/api/likes/add', {
            method: "POST",
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(like)
        })
        const res = await response.json()
        if (res.errors) {
            return alert(res.errors.map(error => error))
        } else {
            setCommentDeleting(false)
        }
    }
    const unlikeSong = async (e, liked) => {
        e.stopPropagation()
        e.preventDefault()
        setCommentDeleting(true)
        console.log(liked, 'Liked Id')
        const response = await fetch(`/api/likes/${liked[0].id}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            const res = response.json()
            if (res.errors) {
                return alert(res.errors.map(error => error))
            } else {
                setCommentDeleting(false)
            }
        }
    }
    return (
        <div id="song-page-container">

            {song.genre === 'Hip-Hop' && (
                <div className="song-header-container hip-hop">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single hip-hop" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'RNB' && (
                <div className="song-header-container rnb">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single rnb" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'Metal' && (
                <div className="song-header-container metal">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single metal" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'Pop' && (
                <div className="song-header-container pop">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single pop" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'Jazz' && (
                <div className="song-header-container jazz">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single jazz" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'Country' && (
                <div className="song-header-container country">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single country" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'EDM' && (
                <div className="song-header-container edm">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single edm" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            {song.genre === 'Rock' && (
                <div className="song-header-container rock">
                    <div id="name-play-container">
                        <button id={song.song_file} className="button-img-container-single rock" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <h2 id="song-name">{song.title}</h2>
                    </div>
                    <h2 id="song-genre-single">{song.genre}</h2>
                </div>
            )}
            <div>
                {song && song.user_id == user.id && (
                    <div className="redirect-button-container-div">
                        <button className='redirect-buttons-single' onClick={(e) => redirectToSongEdit(e, song)}>Edit Song</button>
                        <button className='redirect-buttons-single' onClick={(e) => deleteSong(e)}>Delete Song</button>

                    </div>
                )}
                {            //! Create A Comment
                }
                <div>
                    <div id="comment-form-container">
                        <form onSubmit={handleSubmit} id="create-a-comment-form-container">
                            <div className=''></div>
                            <input
                                id="comment-text"
                                type='text'
                                value={commentText}
                                placeholder='Write A Comment'
                                onChange={e => setCommentText(e.target.value)} />
                        </form>
                    </div>
                </div>

            </div>
            {song && song.comments && (
                <div>
                    <div><h3>{song.likes.length} Likes</h3>
                    {liked.length === 0 && (
                        <button className="redirect-buttons-single" onClick={(e) => likeSong(e)}>Like</button>
                    )}
                    {liked.length > 0 && (
                        <button className="redirect-buttons-single" onClick={(e) => unlikeSong(e, liked)}>Liked</button>
                    )}
                    </div>
                    <h3> {song.comments.length} Comments </h3>
                    {song.comments.map(comment =>
                        <IndividualComments comment={comment} user={user} songId={songId} />
                    )}

                </div>
            )}

        </div>
    )
}

export default SingleSongPage
