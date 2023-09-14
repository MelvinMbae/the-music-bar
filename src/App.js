import React, { useState, useEffect } from 'react';
import Cover from './components/Cover';
import MusicAlbumsPage from './components/MusicAlbumsPage';
import ExpertReviewPage from './components/ExpertReviewPage';

import './App.css';

const albumURL = "http://localhost:3000/albums";


function App() {
  const [albums, setAlbums] = useState([])
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);
  const [albumsDictionary, setAlbumsDictionary] = useState({});

  function fetchAlbumsData() {
    fetch(albumURL)
      .then((response) => response.json())
      .then((data) => {
        const dictionary = {};

        data.forEach(album => dictionary[album.id] = album);

        setAlbums(data);
        setAlbumsDictionary(dictionary);
      });
  }
  useEffect(() => fetchAlbumsData(), []);
  return (
    <div>
      <Cover />
      <MusicAlbumsPage albums={albums} favoriteAlbums={favoriteAlbums} setFavoriteAlbums={setFavoriteAlbums} />
      <ExpertReviewPage albumsDictionary={albumsDictionary}/>
    </div>
  );
}

export default App;
