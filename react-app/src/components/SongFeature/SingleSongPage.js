import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { setCurrentSong } from "../../store/currentSong"
import { getTheSelectedSong, SelectTheSong } from "../../store/selectedSong"


const SingleSongPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { songId } = useParams()
    const song = useSelector(state => state.selectedSong)
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
    return (
        <div id="song-container">
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
