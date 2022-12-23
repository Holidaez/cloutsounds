const SET_SELECTED_SONG = 'SELECTED_SONG/SET_SELECTED_SONG'


export const SelectTheSong = data => ({
    type: SET_SELECTED_SONG,
    payload:data
})

export const getTheSelectedSong = (testName) => async (dispatch) => {
    const response = await fetch('/api/songs/specific/song', {
        method:'POST',
        body:JSON.stringify(testName)
    })
    if (response.ok) {
        const song = await response.json()
        dispatch(SelectTheSong(song))
    }else throw new Error("Bad Request")
}

export default function selectedSong(state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_SONG: {
            const newState = action.payload
            return newState
        }
        default:
            return state
    }
}
