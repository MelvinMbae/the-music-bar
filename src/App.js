import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Cover from './components/Cover';
import MusicAlbumsPage from './components/MusicAlbumsPage';
import ExpertReviewPage from './components/ExpertReviewPage';

import './App.css';
import Navigation from './components/Navigation';

const albumURL = "http://localhost:3000/albums";


function App() {
  const [albums, setAlbums] = useState([])
  const [favoriteAlbums, setFavoriteAlbums] = useState([]);
  const [albumsDictionary, setAlbumsDictionary] = useState({});
  const [commentsDictionary, setCommentsDictionary] = useState({});

  function fetchAlbumsData() {
    fetch(albumURL)
      .then((response) => response.json())
      .then((data) => {
        const dictionary = {};
        const commentsDict = {}

        data.forEach(album => {
          dictionary[album.id] = album;
          commentsDict[album.id] = [];
        });

        setAlbums(data);
        setAlbumsDictionary(dictionary);

      });
  }
  useEffect(() => fetchAlbumsData(), []);

  useEffect(() => {
    const commentsDict = {}
    albums.forEach(album => {
      commentsDict[album.id] = [];
    });
    setCommentsDictionary(commentsDict);
  }, [albums])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MusicAlbumsPage albums={albums} favoriteAlbums={favoriteAlbums} setFavoriteAlbums={setFavoriteAlbums} />,
    },
    {
      path: "review",
      element: <ExpertReviewPage albumsDictionary={albumsDictionary} commentsDictionary={commentsDictionary} setCommentsDictionary={setCommentsDictionary} />,
    },
  ]);

  return (
    <>
      <Navigation />
      <Cover />
      <RouterProvider router={router} />
    </>

  );
}

export default App;
