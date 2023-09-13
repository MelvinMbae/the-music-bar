import React, { useState, useEffect } from "react";
import Searchbar from "./SearchBar";
import MusicCollection from "./MusicCollection";
import FavoriteAlbums from "./FavoriteAlbums";

const albumURL = "http://localhost:3000/albums";

function MusicAlbumsPage() {

    const [albums, setAlbums] = useState([])
    const [favoriteAlbums, setFavoriteAlbums] = useState([]);

    function fetchAlbumsData() {
        fetch(albumURL)
            .then((response) => response.json())
            .then((data) => setAlbums(data));
    }
    useEffect(() => fetchAlbumsData(), []);

    function setToFavoriteAlbums(albums) {
        if (favoriteAlbums.includes(albums)) {
            alert(`${albums.name} has already been added to your favorites`);
        } else {
            setFavoriteAlbums((prevAlbums) => [...prevAlbums, albums]);
        }
    }

    return (
        <div className="main-content">
            <div className="albums">
                <Searchbar />
                <MusicCollection
                    albums={albums}
                    setFavoriteAlbums={setToFavoriteAlbums} />
                <FavoriteAlbums favoriteAlbums={favoriteAlbums} />

            </div>
        </div>
    )
}

export default MusicAlbumsPage;