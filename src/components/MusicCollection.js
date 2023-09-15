import React from "react";
import AlbumDetails from "./AlbumDetails";

function MusicCollection({ albums }) {
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    function handleSelectAlbum(albumId) {
        const selectAlbum = albums.find((album) => album.id === albumId);
        setSelectedAlbum(selectAlbum); // Set the selectedAlbum correctly
    }
 
  return (
    <div>
    <div className="collection-title">
        <h2>Albums</h2>
        <AlbumDetails album={selectedAlbum} onSelect={handleSelectAlbum}/>
    </div>
    </div>
  );
}

export default MusicCollection;