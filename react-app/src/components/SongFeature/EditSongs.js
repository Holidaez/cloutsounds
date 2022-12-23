import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './EditSong.css'



export default function EditSongsForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { songId } = useParams()
    const userId = useSelector(state => state.session.user.id)
    const song = useSelector(state => state.selectedSong)

    const [songTitle, setSongTitle] = useState(song.title)
    const [genre, setGenre] = useState(song.genre)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',songTitle)
        formData.append('genre',genre)
        formData.append('userId',userId)
        formData.append('songId',songId)
        const response = await fetch('/api/songs/edit', {
            method:'POST',
            body:formData
        })
        const res = await response.json()
        if(res.errors) {
            return alert(res.errors.map(error=>error))
        }else {
            history.push(`/song/${song.id}`)
        }
    }

    return (
        <div>
            <div id="edit-song-container">
                <form onSubmit={handleSubmit}>
                    <input
                    type='text'
                    placeholder="Song Title"
                    value={songTitle}
                    onChange={e=>setSongTitle(e.target.value)}
                    />
                    <select
                    id="song-genre"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    >
                        <option value={"Hip-Hop"}>Hip-Hop</option>
                        <option value={"Rock"}>Rock</option>
                        <option value={"Pop"}>Pop</option>
                        <option value={"Jazz"}>Jazz</option>
                        <option value={"EDM"}>EDM</option>
                        <option value={"Metal"}>Metal</option>
                        <option value={"Country"}>Country</option>
                        <option value={"RNB"}>RNB</option>
                    </select>
                    <button type="submit">Edit Song</button>
                </form>
            </div>
        </div>
    )
}
