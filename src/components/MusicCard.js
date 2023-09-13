import React from "react";


function MusicCard({ album }) {
    return (
        <div className="album-cards">
            <div className="album-image">
                <img src={album.image} />
                <h3>{album.name}</h3>
                <h4>{album.artist}</h4>
                <p>{album.genre}</p>
                <div className="view-add-btns">
                    <button className="viewAlbumAlbum">
                        View Album
                    </button>
                    <button className="viewAlbumAlbum">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MusicCard;