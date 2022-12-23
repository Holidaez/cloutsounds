import ReactPlayer from "react-player"
import { useDispatch, useSelector } from "react-redux"
import './player.css'


const Player = () => {
    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.currentSong)

    return (
        <div>
            <div className="music-container">
            <div id="song-title">{currentSong.title}</div>
            <ReactPlayer
            id='react-player'
            url={currentSong.song_file || null}
            preload="auto"
            controls={true}
            playing={true}
            height={65}
            width='85%'
            />

            </div>
        </div>
    )
}

export default Player
