import React, { useState, useEffect } from "react";
import Comments from "./Comments";

const commentURL = "http://localhost:3000/comments"

function CommentField() {

    const [newComment, setNewComment] = useState("")

    function handleSubmit(e) {
        fetch(commentURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: "Mark Mutugi",
                comment: newComment
            })
        })
        alert("Comment Successful")
    }
    return (
        <div className="comment-field">
            <form >
                Mark Mutugi:<input value={newComment} onChange={(e) => setNewComment(e.target.value)} type="text" placeholder="Add a comment..." />
                <div onClick={handleSubmit} className="comment-btn">Submit</div>
            </form>


        </div>
    )
}
// 
export default CommentField;