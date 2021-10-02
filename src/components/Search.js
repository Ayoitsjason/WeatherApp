import React, { useState } from "react";

const Search = ({ submitSearch }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    submitSearch(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="ui form">
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          placeholder="Type in Zip or City"
        />
        <button className="ui button">Search</button>
      </form>
    </div>
  );
};

export default Search;
