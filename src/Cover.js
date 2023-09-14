import React from "react";

function Cover() {
  return (
    <div className="homepage">
      <div className="cover">
        <div className="title">
          <div className="heading">
            The Music Bar
            <img className="image" src="./music.png" alt="record player" />
            <nav>
              <body>
                <ul class="nav-links">
                  <li>
                    <a href="#homepage">Home</a>
                  </li>
                  <li class="center">
                    <a href="#playlists">Playlists</a>
                  </li>
                  <li class="upward">
                    <a href="#reviews">Expert Reviews</a>
                  </li>
                </ul>
              </body>
            </nav>
          </div>
          <div class="tagline">
            A Music community where you can review your best albums and follow
            your favorite artists
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
