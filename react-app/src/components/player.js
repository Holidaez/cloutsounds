import ReactPlayer from "react-player"
import { useDispatch, useSelector } from "react-redux"



const Player = () => {
    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.currentSong)

    return (
        <div>
            <div className="music-container">
            <ReactPlayer
            url={currentSong}
            controls={true}
            playing={true}
            height={75}
            width={1000}
            />

            </div>
        </div>
    )
}

export default Player
