import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import './UploadSong.css'



const SongUploadForm = () => {
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
    const [song_file, setSong_file] = useState('')
    const [songLoading, setSongLoading] = useState(false)
    const [songTitle, setSongTitle] = useState('')
    const [genre, setGenre] = useState('Hip-Hop')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('audio', song_file)
        formData.append('title', songTitle)
        formData.append('genre', genre)
        formData.append('userId', userId)
        setSongLoading(true)
        const response = await fetch('/api/songs/add', {
            method:"POST",
            body:formData
        })
        if (response.ok){
            await response.json()
            setSongLoading(false)
            history.push('/')
        }else {
            setSongLoading(false)
            console.log('error')
        }
    }
    const updateSong = (e) => {
        const file = e.target.files[0]
        setSong_file(file)
    }
    return (
        <div>
            <div id="upload-song-container" >
                <form onSubmit={handleSubmit} id='upload-song-form-container'>
                    <div>Title</div>
                    <input
                    id="upload-song-form-title"
                    type='text'
                    placeholder="Song Title"
                    value={songTitle}
                    required={true}
                    onChange={e=>setSongTitle(e.target.value)}
                    />
                    <input
                    id="upload-song-file"
                    type="file"
                    title=" "
                    accept="audio/*"
                    required={true}
                    onChange={updateSong}
                    />
                    <div>Genre</div>
                    <select
                    id="song-genre"
                    value={genre}
                    required={true}
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
                    <button type="submit" id="submit-upload-song">Upload Song</button>
                </form>
            </div>
        </div>
    )
}

export default SongUploadForm
