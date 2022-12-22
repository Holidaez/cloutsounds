import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import  ReactPlayer  from 'react-player'
import { getSongs } from "../../store/songs"
import { setCurrentSong } from "../../store/currentSong"
const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongs())
    }, [])
    const songs = useSelector(state => state.songs.songs)


    const setAudioFile = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        dispatch(setCurrentSong(e.target.id))
    }

    return (
        <div>
            <h1>What's Popular Today</h1>
            {songs && songs.map(song => (<button id={song.song_file} onClick={(e) => setAudioFile(e)}>{song.title}</button>
            ))}
        </div>
    )
}

export default MainPage
