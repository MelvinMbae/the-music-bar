import React from "react";
import ReviewCard from "./ReviewCard";
// import FavoriteAlbums from "./FavoriteAlbums";

function Reviews({ reviews, albumsDictionary }) {
    return (
        <div><h2>Reviews</h2>
            {/* Check Mucic collection main div styling*/}
            <div className="list-of-reviews">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        album={albumsDictionary[review.albumID]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Reviews;