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


    const setAudioFile = (e, value) => {
        e.preventDefault();
        console.log(value)
        dispatch(setCurrentSong(value))
    }

    const redirectToUserPage  = () => {

    }
    const redirectToSongPage = (e, value) => {
        e.preventDefault()
        console.log(value)
        let path = `/song/${value.id}`
        // dispatch(SelectTheSong(value))
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
        <div id="page-container">
            <h1>Hip-Hop</h1>
            <div id="song-flex-box">
                {songs && HiphopSongs && HiphopSongs.map(song => (
                    <div id="hip-hop" className="song-card-container hip-hop">
                        <button className="song-title hip-hop" id={song} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container hip-hop" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button-white.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name hip-hop" id="hip-hop" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>RNB</h1>
            <div id="song-flex-box">
                {songs && RNBSongs && RNBSongs.map(song => (
                    <div className="song-card-container rnb" id="rnb">
                        <button className="song-title rnb" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container rnb" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button-white.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name rnb" id="rnb" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>Pop</h1>
            <div id="song-flex-box">
                {songs && PopSongs && PopSongs.map(song => (
                    <div className="song-card-container pop" id="pop">
                        <button className="song-title pop" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container pop" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button-white.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name pop" id="pop" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>Metal</h1>
            <div id="song-flex-box">
                {songs && MetalSongs && MetalSongs.map(song => (
                    <div className="song-card-container metal" id="metal">
                        <button className="song-title metal" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container metal" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name metal" id="metal" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>Jazz</h1>
            <div id="song-flex-box">
                {songs && JazzSongs && JazzSongs.map(song => (
                    <div className="song-card-container jazz" id="jazz">
                        <button className="song-title jazz" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container jazz" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name jazz" id="jazz" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>Country</h1>
            <div id="song-flex-box">
                {songs && CountrySongs && CountrySongs.map(song => (
                    <div className="song-card-container country" id="country">
                        <button className="song-title country" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container country" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name country" id="country" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>EDM</h1>
            <div id="song-flex-box">
                {songs && EDMSongs && EDMSongs.map(song => (
                    <div className="song-card-container edm" id="edm">
                        <button className="song-title edm" id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container edm" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name edm" id="edm" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>

            <h1>Rock</h1>
            <div id="song-flex-box">
                {songs && RockSongs && RockSongs.map(song => (
                    <div className="song-card-container rock" id="rock">
                        <button className="song-title rock"  id={song.id} onClick={(e) => redirectToSongPage(e, song)}>{song.title}</button>
                        <button id={song.song_file} className="button-img-container rock" onClick={(e) => setAudioFile(e, song)}><img src="/buttonImgs/play-button.png" id={song.song_file} className='play-button-img'></img></button>
                        <button className="uploader-name rock" id="rock" onClick={redirectToUserPage}>By: {song.user.username}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage
