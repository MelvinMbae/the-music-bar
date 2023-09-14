import React, { useState, useEffect } from "react";

const commentURL = "http://localhost:3000/comments";

function CommentsList(props) {
    const {
        album,
        commentsDictionary,
        setCommentsDictionary,
        apiComments = [],
        fetchCommentData
    } = props;

    const [newComment, setNewComment] = useState("");
    const [albumComments, setAlbumComments] = useState([]);

    useEffect(
        () => setAlbumComments(apiComments.filter((comment) => comment.albumID === album.id)),
        [apiComments],
    );

    function handleSubmit(e) {
        fetch(commentURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: "Mark Mutugi",
                comment: newComment,
                albumID: album.id,
            }),
        })
            .then((res) => res.json())
            .then((comment) => {
                setCommentsDictionary({
                    ...commentsDictionary,
                    ...{ [album.id]: [...albumComments, comment] },
                });
                fetchCommentData();
                setNewComment("");
            });
    }
    return (
        <div className="comments-section">
            <div className="comments-list">
                {albumComments.map((comment) => (
                    <div className="comment-field">
                        {comment.user}:<div>{comment.comment}</div>
                        <button className="comment-btn">Delete</button>
                        <button className="comment-btn">Edit</button>
                    </div>
                ))}
            </div>
            <div className="comment-input">
                Add Comment:{" "}
                <input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    type="text"
                    placeholder="Add a comment..."
                />
                <button onClick={handleSubmit} className="comment-btn">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CommentsList;
