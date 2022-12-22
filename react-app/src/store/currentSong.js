
const SET_CURRENTSONG = 'currentsong/SET_CURRENTSONG'


export const setCurrentSong = data => ({
    type: SET_CURRENTSONG,
    payload:data
})


export default function currentSong(state = {}, action) {
    switch (action.type) {
        case SET_CURRENTSONG: {
            const newState = action.payload
            return newState
        }
        default:
            return state
    }
}
