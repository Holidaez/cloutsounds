import { useSelector } from "react-redux"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import './EditComments.css'


const EditComment = () => {
    const history = useHistory()
    const {commentId} = useParams()
    const comments = useSelector(state => state.selectedSong.comments)
    const [commentText, setCommentText] = useState(comments.filter(comment => comment.id == commentId)[0].comment_text)
    const [currentSongId, setCurrentSongId] = useState(comments.filter(comment => comment.id == commentId)[0].song_id)
    const userId = useSelector(state => state.session.user.id)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const commentz = {
            commentText:commentText
        }
        const response = await fetch(`/api/comments/edit/${commentId}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentz)
        })
        const res = await response.json()
        console.log(res)
        if(res.errors) {
            return alert(res.errors.map(error=>error))
        }else {
            history.push(`/song/${currentSongId}`)
        }
    }
    return (
        <div>
            <div id="edit-comment-form-container">
                <form onSubmit={handleSubmit} id='edit-comment-form-container'>
                    <div>Comment</div>
                    <textarea
                    id='comment-text'
                    type='text'
                    placeholder="Add Comment"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    ></textarea>
                    <button type="submit" id="submit-updated-comment">Update Comment</button>
                </form>
            </div>
        </div>
    )
}


export default EditComment
