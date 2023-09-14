import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";

const commentURL = "http://localhost:3000/comments";

function Comments({ album, commentsDictionary, setCommentsDictionary }) {
    const [apiComments, setApiComments] = useState([]);

    function fetchCommentData() {
        fetch(commentURL)
            .then((response) => response.json())
            .then((data) => setApiComments(data));
    }

    useEffect(() => fetchCommentData(), []);

    return (
        <CommentsList
            apiComments={apiComments}
            album={album}
            commentsDictionary={commentsDictionary}
            setCommentsDictionary={setCommentsDictionary}
            fetchCommentData={fetchCommentData}
        />
    );
}

export default Comments;
