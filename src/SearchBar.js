import React, { useState, useEffect } from "react";

function Searchbar() {
  const api =
    "https://api.json-generator.com/templates/Hlfx5Cka4gGu/data?access_token=lnm8pd77s2dhoiyoz1684mes7deylhms7v9habod";

  const [search, setSearch] = useState("");
  const [SearchRes, setSearchRes] = useState([]);
  useEffect(() => {
    searchAlbumBar();
  }, [search]);

  const searchAlbumBar = async () => {
    try {
      const res = await fetch(api);
      const jsonRes = await res.json();
      setSearchRes(jsonRes);
    } catch (error) {
      console.log(error);
    }
  };

  function HandleSearching(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="searchbar">
      <form className="form1" onSubmit={HandleSearching}>
        <input
          className="search-album"
          type="text"
          value={search}
          name=""
          onChange={(event) => setSearch(event.target.value)}
          placeholder="What do you want to listen to?"
        />

        <button type="submit">Search</button>
      </form>
      {SearchRes.length > 0 ? (
        <ul>
          {SearchRes.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        console.log("No results found")
      )}
    </div>
  );
}

export default Searchbar;

//lnm8pd77s2dhoiyoz1684mes7deylhms7v9habod
