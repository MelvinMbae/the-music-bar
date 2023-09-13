import React from "react";

function FavCard({ album, addToFavorite }) {
    return (
        <div className="fav-album-cards">
            <div className="fav-album-details">
                <img className="fav-image" src={album.image} />
                <h3 className="heading-h3">{album.name}</h3>
                {/* <h4 className="heading-h4">{album.artist}</h4> */}
                <p>{album.genre}</p>
                <div className="remove-fav">
                    <button onClick={addToFavorite} className="remove-fav-btn">
                        Remove from Favorites
                    </button>

                </div>

            </div>
        </div>
    )
}
export default FavCard;