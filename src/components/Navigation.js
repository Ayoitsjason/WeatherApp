import React from "react";
import Search from "./Search";

const Navigation = ({ submitSearch }) => {
  return (
    <div className="ui header">
      <h1>Todays Weather</h1>
      <Search submitSearch={submitSearch} />
    </div>
  );
};

export default Navigation;
