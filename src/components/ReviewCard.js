import React from "react";
import CommentField from "./CommentField";
// import Comments from "./Comments";
import CommentCard from "./CommentCard";


function ReviewCard({ review, album }) {
    return (
        <div className="review-cards">
            <div className="review-details">
                <img className="review-image-1" src={album.image} alt="album-cover" />
                <h3>{review.album}</h3>
                <h4>{review.reviewer}</h4>
                <p>{review.review}</p>
                <img className="review-image-2" src={review.rating} alt="star-rating" />
                <p>{review.user}: {review.comment}</p>
                <CommentField />
            </div>
        </div>
    )
}
export default ReviewCard;