const SET_SELECTED_SONG = 'SELECTED_SONG/SET_SELECTED_SONG'


export const SelectTheSong = data => ({
    type: SET_SELECTED_SONG,
    payload:data
})


export default function selectedSong(state = {}, action) {
    switch (action.type) {
        case SET_SELECTED_SONG: {
            console.log(action.payload)
            const newState = action.payload
            return newState
        }
        default:
            return state
    }
}
