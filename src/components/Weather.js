import React from "react";
import { checkObjSize, getErrorCode, checkErrorCodeMeaning } from "../helper";

const Weather = ({ location, error }) => {
  const name = checkObjSize(location) ? "Loading..." : location.name;
  const temp = checkObjSize(location) ? "Loading..." : location.temp;
  const errorCode = getErrorCode(error);
  const errorMeaning = checkErrorCodeMeaning(errorCode);

  if (error) {
    return (
      <div className="ui segment">
        <p>{errorMeaning}</p>
      </div>
    );
  } else {
    return (
      <div className="ui segment" style={{ height: "10rem" }}>
        <h3>{name}</h3>
        <p>Temperature: {temp} F</p>
      </div>
    );
  }
};

export default Weather;
