
//Definitions
const SET_SONGS = 'songs/SET_SONGS'

//Actions
const setSongs = data => ({
    type: SET_SONGS,
    payload:data
})


//Thunks
export const getSongs = () => async (dispatch) => {
    const response = await fetch('/api/songs')
    if (response.ok){
        const songList = await response.json()
        dispatch(setSongs(songList))
    }else throw new Error("Bad Request")
}


//Reducer

export default function songsReducer(state = {}, action) {
    switch (action.type) {
        case SET_SONGS: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
