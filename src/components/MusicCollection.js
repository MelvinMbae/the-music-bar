import React from "react";
import MusicCard from "./MusicCard";
// import FavoriteAlbums from "./FavoriteAlbums";

function MusicCollection({ albums, setFavoriteAlbums }) {
  return (
    <div className="music-collection">
      <h2>Albums</h2>
      <div className="album-collection">
        {albums.map((album) => (
          <MusicCard
            key={album.id}
            album={album}
            addToFavorite={() => setFavoriteAlbums(album)}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicCollection;
