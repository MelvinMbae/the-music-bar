import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const commentURL = "http://localhost:3000/comments"

function Comments() {

    const [comments, setComments] = useState([])

    function fetchCommentData() {

        fetch(commentURL)
            .then((response) => response.json())
            .then((data) => setComments(data));

    }

    useEffect(() => fetchCommentData(), []);
    return (
        <div>
            <Comment comments={comments} />

        </div>
    )
}

export default Comments;