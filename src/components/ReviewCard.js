import React from "react";
import Comments from "./Comments";

function ratingStars(num) {
  let i = 0;

  const stars = [];

  while (i < num) {
    stars[i] = <span className="material-symbols-outlined">star</span>;

    i += 1;
  }

  return stars;
}

function ReviewCard({
  review,
  album = {},
  commentsDictionary,
  setCommentsDictionary,
}) {
  return (
    <div className="review-cards">
      <div className="review-details">
        <div className="review-data">
          <img className="review-image-1" src={album.image} alt="album-cover" />
          <div className="review-metadata">
            <h3>{album.name}</h3>
            <h4>{review.reviewer}</h4>
            <p>{review.review}</p>
            <div className="rating-stars">
              {ratingStars(Number(review.rating)).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
          </div>
        </div>
        <Comments
          album={album}
          commentsDictionary={commentsDictionary}
          setCommentsDictionary={setCommentsDictionary}
        />
      </div>
    </div>
  );
}
export default ReviewCard;
