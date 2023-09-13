import React from "react";
import FavCard from "./FavCard";

function FavoriteAlbums({ favoriteAlbums }) {
    return (
        <div><h2>Favorite Albums</h2>
            <div className="favorite-collection">

                {favoriteAlbums.map((album) => (
                    <FavCard
                        key={album.id}
                        album={album}
                    />
                ))}
            </div>

        </div>
    )
}
export default FavoriteAlbums