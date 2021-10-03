import React from "react";
import { checkObjSize } from "../helper";

const Weather = ({ location }) => {
  const name = checkObjSize(location) ? "Loading..." : location.name;
  const temp = checkObjSize(location) ? "Loading..." : location.temp;

  return (
    <div className="ui segment">
      <h3>{name}</h3>
      <p>Temperature: {temp} F</p>
    </div>
  );
};

export default Weather;
