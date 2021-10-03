import React from "react";
import Search from "./Search";

const Navigation = ({ submitSearch }) => {
  return (
    <div
      className="ui header"
      style={{
        margin: "1rem",
        padding: "1rem",
        borderBottom: ".5px solid lightgrey",
      }}
    >
      <h1>Todays Weather</h1>
      <Search submitSearch={submitSearch} />
    </div>
  );
};

export default Navigation;
