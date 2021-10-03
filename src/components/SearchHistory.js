import React from "react";

const SearchHistory = ({ weatherRecord }) => {
  const renderRecord = weatherRecord.map((obj) => {
    if (obj.name !== undefined) {
      return (
        <li style={{}} key={obj.id}>
          {obj.name} {obj.temp} F
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="ui segment">
      <h3>Search History</h3>
      <ul style={{ listStyle: "none", padding: "0" }}>{renderRecord}</ul>
    </div>
  );
};

export default SearchHistory;
