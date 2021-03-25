import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={handleSubmit}
        placeholder="Moon..."
      >
        <input
          className="Search"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
