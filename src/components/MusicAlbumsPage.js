import React, { useState, useEffect } from "react";
import MusicCollection from "./MusicCollection";



function MusicAlbumsPage() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchAlbumsData() {
          const response = await fetch("http://localhost:3000/albums");
          const data = await response.json();
          setAlbums(data.albums);
        }
        
        fetchAlbumsData();
      }, []);



    // Define the handleSelectAlbum function
   
    return (
        <div className="albums">
            <MusicCollection
                albums={albums}
            />
        </div>
    );
}

export default MusicAlbumsPage;