import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";

const reviewURL = "http://localhost:3000/expertReview";

function ExpertReviewPage() {
    const [reviews, setReviews] = useState([])

    function fetchReviewData() {
        fetch(reviewURL)
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }
    useEffect(() => fetchReviewData(), []);
    return (
        // <div className="main-content"></div>
        <div className="reviews">
            <Reviews reviews={reviews} />

        </div>

    )
}
export default ExpertReviewPage

