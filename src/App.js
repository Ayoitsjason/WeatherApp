import React, { useState, useEffect } from "react";
import weatherAPI from "./api/weatherAPI";
import Navigation from "./components/Navigation.js";

const App = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("tracy");

  useEffect(() => {
    searchWeather(location);
  }, [location]);

  const searchWeather = async (city, zip) => {
    const response = await weatherAPI.get("/weather", {
      params: {
        q: city,
      },
    });
    setWeather(response.data.main.temp);
  };

  return (
    <div className="ui container">
      <Navigation submitSearch={setLocation} />
      <hr />
      <div className="ui body">
        <h3>{location}</h3>
        {weather}
      </div>
    </div>
  );
};

export default App;
