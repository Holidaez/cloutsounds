import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { setCurrentSong } from "../../store/currentSong"
import { getTheSelectedSong, SelectTheSong } from "../../store/selectedSong"

import './SingleSongPage.css'

const SingleSongPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { songId } = useParams()
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
    const setAudioFile = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        dispatch(setCurrentSong(e.target.id))
    }
    const redirectToSongEdit = (e, value) => {
        e.preventDefault()
        console.log(value)
        let path = `/edit/${value.id}`
        // dispatch(SelectTheSong(value))
        history.push(path)
    }
    const deleteSong = async (e) => {
        e.stopPropagation()
        const response = await fetch(`/api/songs/${song.id}`, {
            method:'DELETE'
        })
        if (response.ok){
            const res = response.json()
            if(res.errors) {
                return alert(res.errors.map(error => error))
            }else{

                history.push(`/song/${songId}`)
            }
        }
    }
    //! Comments
    const deleteComment = async (e) => {
        e.stopPropagation()
        setCommentDeleting(true)
        const response = await fetch(`/api/comments/${e.target.id}`, {
            method:'DELETE'
        })
        if (response.ok){
            const res = response.json()
            if(res.errors) {
                return alert(res.errors.map(error => error))
            }else{
                setCommentDeleting(false)
            }
        }
    }
    const redirectToEditComment = (e) => {
        e.preventDefault()
        const path = `/comment/edit/${e.target.id}`
        history.push(path)
    }
    const redirectToAddComment = (e) => {
        e.preventDefault()
        console.log(songId)
        const path = `/comment/add/${songId}`
        history.push(path)
    }
    return (
        <div id="song-page-container">
            {song && song.user_id == user.id &&(
                <div>
                <button onClick={(e) => redirectToSongEdit(e, song)}>Edit Song</button>
                <button onClick={(e) => deleteSong(e)}>Delete Song</button>
                <button onClick={(e) => redirectToAddComment(e)}>Add Comment</button>
                </div>
            )}

            <div id="song-header-container">
            <h2>{song.title}</h2>
            <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
            </div>

            {song && song.comments &&(
                <div>
                <h3> Comments </h3>
                {song.comments.map(comment => <div>{comment.user_id === user.id &&(<div><button id={comment.id} onClick={(e) => deleteComment(e)}>deleteComment</button><button id={comment.id} onClick={(e) =>  redirectToEditComment(e)}>Edit Comment</button></div>)}{comment.comment_text}</div>)}
                </div>
            )}

        </div>
    )
}

export default SingleSongPage
