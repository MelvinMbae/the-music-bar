import React from "react";
import MusicCard from "./MusicCard";

function MusicCollection({ albums }) {
    console.log(albums)
    return (
        <div><h2>Albums</h2>
            <div className="album-collection">

                {albums.map((album) => (
                    <MusicCard
                        key={album.id}
                        album={album} />
                ))}
            </div>
        </div>
    )
}

export default MusicCollection;