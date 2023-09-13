import React from "react";

function Searchbar() {
    return (
        <div className="searchbar">
            <form className="form1">
                <input
                    className="search-album"
                    type="text"
                    name=""
                    placeholder="What do you want to listen to?"

                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;