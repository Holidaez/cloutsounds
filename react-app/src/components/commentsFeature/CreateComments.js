import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

import './CreateComments.css'


const CreateComment = () => {
    const history = useHistory()
    const {songId} = useParams()
    const userId = useSelector(state => state.session.user.id)
    const [commentText, setCommentText] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        // const formData = new FormData()
        // formData.append('songId',songId)
        // formData.append('userId',userId)
        // formData.append('commentText',commentText)
        const commentz = {
            songId:parseInt(songId),
            userId:userId,
            commentText:commentText
        }
        console.log(JSON.stringify(commentz))
        const response = await fetch('/api/comments/add', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(commentz)
        })
        const res = await response.json()
        console.log(res)
        if(res.errors) {
            return alert(res.errors.map(error=>error))
        }else {
            history.push(`/song/${songId}`)
        }
    }
    return (
        <div>
            <div id="comment-form-container">
                <form onSubmit={handleSubmit} id="create-a-comment-form-container">
                    <div>Comment</div>
                    <input
                    id="comment-text"
                    type='text'
                    placeholder='Write A Comment'
                    onChange={e => setCommentText(e.target.value)} />
                <button type="submit" id="submit-comment">Create Comment</button>
                </form>
            </div>
        </div>

    )

}





export default CreateComment
