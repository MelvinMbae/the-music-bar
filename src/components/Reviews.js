import React from "react";
import MusicCard from "./MusicCard";
// import FavoriteAlbums from "./FavoriteAlbums";

function Reviews({reviews}) {
    console.log(reviews)
    return (
        <div><h2>Reviews</h2>
            {/* Check Mucic collection main div styling*/}
            <div className="list-of-reviews">
                {/* {reviews.map((review) => (
                    <MusicCard
                        key={album.id}
                        album={album}
                        addToFavorite={() => setFavoriteAlbums(album)} />
                ))} */}
            </div>
        </div>
    )
}

export default Reviews;