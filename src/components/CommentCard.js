import React from "react";

function CommentCard({ comment }) {
  // console.log(comment)
  return (
    <div className="comment-cards">
      <div className="comment details">
        <p>{comment.comment}</p>
      </div>
    </div>
  );
}
export default CommentCard;
