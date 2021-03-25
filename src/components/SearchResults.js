import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <h2>No matching results</h2>;
  } else {
    return (
      <>
        <div className="imageContainer">
          {results.map((image, index) => (
            <img
              className="nasaImage"
              key={index}
              alt="spaceImages"
              src={image}
            />
          ))}
        </div>
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};
export default SearchResults;
