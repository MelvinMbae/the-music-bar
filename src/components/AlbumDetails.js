import React from "react";

function AlbumDetails({ album, onSelect }) {
    console.log(album)
    function handleClick(){
        onSelect(album);
    }

    if (!album) {
        return null; // or you can return a placeholder message or component
      }
    

    return (
        <div className="album-details" onClick={handleClick}>
            <h2>{album.name}</h2>
            <img src={album.image} alt={album.name} />
            <h2>{album.name}</h2>
            <p>{album.artist}</p>
            <p>Genre: {album.genre}</p>
            <p>Release Year: {album.releaseYear}</p>
            <p>{album.description}</p>
            <p>Number of Songs: {album.songs}</p>
        </div>
    );
}

export default AlbumDetails;

