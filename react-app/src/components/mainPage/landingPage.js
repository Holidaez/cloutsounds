import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { getSongs } from "../../store/songs"

const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSongs())
    }, [])
    return (
        <div>
            <h1>My Home Page</h1>
            <h2>Tested test</h2>

        </div>
    )
}

export default MainPage
