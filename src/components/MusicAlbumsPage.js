import React from "react";
import Searchbar from "./SearchBar";
import MusicCollection from "./MusicCollection";
import FavoriteAlbums from "./FavoriteAlbums";

function MusicAlbumsPage(props) {
  const { favoriteAlbums, setFavoriteAlbums, albums } = props;

  function setToFavoriteAlbums(album) {
    if (favoriteAlbums.includes(album)) {
      alert(`${album.name} has already been added to your favorites`);
    } else {
      setFavoriteAlbums((prevAlbums) => [...prevAlbums, album]);
    }
  }
  function removeFromFavorites(clickedAlbum) {
    const remAlbums = favoriteAlbums.filter(
      (album) => album.id !== clickedAlbum.id,
    );
    setFavoriteAlbums(remAlbums);
  }

  return (
    <div className="albums">
      <Searchbar />
      <MusicCollection
        albums={albums}
        setFavoriteAlbums={setToFavoriteAlbums}
      />
      <FavoriteAlbums
        favoriteAlbums={favoriteAlbums}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default MusicAlbumsPage;
