import React from "react";
import CommentCard from "./CommentCard";
// import FavoriteAlbums from "./FavoriteAlbums";

function Comment({ comments }) {
    console.log(comments)
    return (
        <div><h2>Comments</h2>
            {/* Check Mucic collection main div styling*/}
            <div className="list-of-comments">
                {comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comment;