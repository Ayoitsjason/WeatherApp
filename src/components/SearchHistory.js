import React from "react";

const SearchHistory = ({ weatherRecord }) => {
  const renderRecord = weatherRecord.map((obj) => {
    if (obj.name !== undefined) {
      return (
        <div key={obj.id}>
          {obj.name} {obj.temp}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="ui segment">
      <h3>Search History</h3>
      <div>{renderRecord}</div>
    </div>
  );
};

export default SearchHistory;
