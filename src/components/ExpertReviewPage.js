import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";

const reviewURL = "http://localhost:3000/expertReview";

function ExpertReviewPage(props) {
    const { albumsDictionary } = props;

    const [reviews, setReviews] = useState([])

    function fetchReviewData() {
        fetch(reviewURL)
            .then((response) => response.json())
            .then((data) => {
                const parsedReviews = [];
                data.forEach(review => {

                    const newReview = { ...review, ...albumsDictionary[review.albumID] }
                    console.log({ newReview, albumsDictionary })
                });
                setReviews(data)
            });
    }
    useEffect(() => fetchReviewData(), []);
    return (
        <div className="reviews">
            <Reviews reviews={reviews} albumsDictionary={albumsDictionary} />
        </div>

    )
}
export default ExpertReviewPage

