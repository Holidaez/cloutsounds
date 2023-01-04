import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { getTheSelectedSong } from "../../store/selectedSong"


const IndividualComments = ({ comment, user, songId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const { songId } = useParams()
    const [showButtons, setShowButtons] = useState(false)
    const [commentDeleting, setCommentDeleting] = useState(false)

    useEffect(async () => {
        const testName = {
            songId: songId
        }
        await dispatch(getTheSelectedSong(testName))
    }, [commentDeleting])

    const deleteComment = async (e) => {
        e.stopPropagation()
        setCommentDeleting(true)
        const response = await fetch(`/api/comments/${e.target.id}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            const res = response.json()
            if (res.errors) {
                return alert(res.errors.map(error => error))
            } else {
                setCommentDeleting(false)
            }
        }
    }
    const redirectToEditComment = (e) => {
        e.preventDefault()
        const path = `/comment/edit/${e.target.id}`
        history.push(path)
    }
    return (
        <div id="comment-block-single" onMouseOver={() => setShowButtons(true)} onMouseOut={() => setShowButtons(false)}>
            <div>{comment.username}</div>
            <div id="comment-text-block">{comment.comment_text}
                <div>{comment.user_id === user.id && (
                    <div>
                        <button className={showButtons ? 'comment-button' : 'no-comment-button'} id={comment.id} onClick={(e) => deleteComment(e)}>Delete Comment</button>
                        <button className={showButtons ? 'comment-button' : 'no-comment-button'} id={comment.id} onClick={(e) => redirectToEditComment(e)}>Edit Comment</button>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default IndividualComments
