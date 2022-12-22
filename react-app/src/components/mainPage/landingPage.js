import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ReactPlayer from 'react-player'
import { getSongs } from "../../store/songs"
import { setCurrentSong } from "../../store/currentSong"
import { useHistory } from "react-router-dom"
import { SelectTheSong } from "../../store/selectedSong"
import "./landingPage.css"
const MainPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    let CountrySongs;
    let HiphopSongs;
    let RNBSongs;
    let RockSongs;
    let EDMSongs;
    let MetalSongs;
    let JazzSongs;
    let PopSongs;
    useEffect(() => {
        dispatch(getSongs())
    }, [])
    const songs = useSelector(state => state.songs.songs)


    const setAudioFile = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        dispatch(setCurrentSong(e.target.id))
    }
    const redirectToUserPage  = () => {

    }
    const redirectToSongPage = (e, value) => {
        e.preventDefault()
        console.log(value)
        let path = `/song/${value.id}`
        dispatch(SelectTheSong(value))
        history.push(path)
    }
    if (songs) {
        CountrySongs = songs.filter(song => song.genre === 'Country')
        HiphopSongs = songs.filter(song => song.genre === 'Hip-Hop')
        RNBSongs = songs.filter(song => song.genre === 'RNB')
        RockSongs = songs.filter(song => song.genre === 'Rock')
        PopSongs = songs.filter(song => song.genre === 'Pop')
        MetalSongs = songs.filter(song => song.genre === 'Metal')
        EDMSongs = songs.filter(song => song.genre === 'EDM')
        JazzSongs = songs.filter(song => song.genre === 'Jazz')
    }

    return (
        <div>
            <h1>Hip-Hop</h1>
            <div id="song-flex-box">


                {songs && HiphopSongs && HiphopSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>
            <h1>RNB</h1>
            <div id="song-flex-box">


                {songs && RNBSongs && RNBSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>Pop</h1>
            <div id="song-flex-box">


                {songs && PopSongs && PopSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>Metal</h1>
            <div id="song-flex-box">


                {songs && MetalSongs && MetalSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>Jazz</h1>
            <div id="song-flex-box">


                {songs && JazzSongs && JazzSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>Country</h1>
            <div id="song-flex-box">


                {songs && CountrySongs && CountrySongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>EDM</h1>
            <div id="song-flex-box">


                {songs && EDMSongs && EDMSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>

            <h1>Rock</h1>
            <div id="song-flex-box">


                {songs && RockSongs && RockSongs.map(song => (
                    <div id="song-card-container">
                        <button className="song-title" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container" onClick={(e) => setAudioFile(e)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button id="uploader-name" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MainPage
