import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";

const commentURL = "http://localhost:3000/comments";

function Comments() {

    const [comments, setComments] = useState([])

    function fetchCommentData() {
        fetch(commentURL)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }

    useEffect(() => fetchCommentData(), []);
    return <CommentsList comments={comments} />;
}

export default Comments;