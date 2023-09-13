import React from "react";
import MusicCard from "./MusicCard";

function FavoriteAlbums({ favoriteAlbums }) {
    return (
        <div><h2>Favorite Albums</h2>
            <div className="favorite-collection">

                {favoriteAlbums.map((album) => (
                    <MusicCard
                        key={album.id}
                        album={album} />
                ))}
            </div>

        </div>
    )
}
export default FavoriteAlbums