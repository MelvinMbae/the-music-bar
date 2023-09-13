import React from "react";
import ReviewCard from "./ReviewCard";
// import FavoriteAlbums from "./FavoriteAlbums";

function Reviews({reviews}) {
    console.log(reviews)
    return (
        <div><h2>Reviews</h2>
            {/* Check Mucic collection main div styling*/}
            <div className="list-of-reviews">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        />
                ))}
            </div>
        </div>
    )
}

export default Reviews;