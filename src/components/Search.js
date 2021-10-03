import React, { useState } from "react";

const Search = ({ submitSearch }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    submitSearch(term);
    setTerm("");
  };

  return (
    <form onSubmit={onSubmit} className="ui form">
      <div className="ui icon input" style={{ width: "60%" }}>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          placeholder="Type in Zip, City, or State"
        />
        <i className="search icon"></i>
      </div>
    </form>
  );
};

export default Search;
