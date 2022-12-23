import { useEffect } from "react"
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
    const user = useSelector(state => state.session.user)
    useEffect(async () => {
        const testName = {
            songId: songId
        }
        await dispatch(getTheSelectedSong(testName))
    }, [])
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
    return (
        <div id="song-page-container">
            {song && song.user_id == user.id &&(
                <button onClick={(e) => redirectToSongEdit(e, song)}>Edit Song</button>
            )}

            <div id="song-header-container">
            <h2>{song.title}</h2>
            <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
            </div>

            {song && song.comments &&(
                <div>
                <h3> Comments </h3>
                {song.comments.map(comment => <div>{comment.comment_text}</div>)}
                </div>
            )}

        </div>
    )
}

export default SingleSongPage
