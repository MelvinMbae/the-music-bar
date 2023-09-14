import React, { useState } from "react";

const commentURL = "http://localhost:3000/comments";

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
            Mark Mutugi:<input value={newComment} onChange={(e) => setNewComment(e.target.value)} type="text" placeholder="Add a comment..." />
            <button onClick={handleSubmit} className="comment-btn">Submit</button>
            <button className="comment-btn">Delete</button>
            <button className="comment-btn">Edit</button>
        </div>
    )
}
// 
export default CommentField;