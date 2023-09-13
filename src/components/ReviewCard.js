import React from "react";
import CommentField from "./CommentField";


function ReviewCard({ review }) {
    return (
        <div className="review-cards">
            <div className="review-details">
                <img className="review-image-1" src={review.image} alt="album-cover" />
                <h3>{review.album}</h3>
                <h4>{review.reviewer}</h4>
                <p>{review.review}</p>
                <img className="review-image-2"src={review.rating} alt="star-rating" />
                <p>{review.user}: {review.comment}</p>
                <CommentField />

                {/* <div className="view-add-btns">
                    <button className="viewAlbumAlbum">
                        View Album
                    </button>
                    <button onClick={addToFavorite} className="viewAlbumAlbum">
                        Add to Favorites
                    </button>
                </div> */}
            </div>
        </div>
    )
}
export default ReviewCard;