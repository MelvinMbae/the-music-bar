import React, { useState, useEffect } from "react";
import Searchbar from "./SearchBar";
import MusicCollection from "./MusicCollection";

const albumURL = "http://localhost:3000/albums";

function MusicAlbumsPage() {

    const [albums, setAlbums] = useState([])

    function fetchAlbumsData() {
        fetch(albumURL)
            .then((response) => response.json())
            .then((data) => setAlbums(data));
    }
    useEffect(() => fetchAlbumsData(), []);

    return (
        <div className="main-content">
            <div className="albums">
                <Searchbar />
                <MusicCollection albums={albums} />

            </div>
        </div>
    )
}

export default MusicAlbumsPage;