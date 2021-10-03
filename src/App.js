import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation.js";
import Weather from "./components/Weather.js";
import SearchHistory from "./components/SearchHistory.js";
import useWeather from "./hooks/useWeather.js";
import useCleanRecord from "./hooks/useCleanRecord.js";

const App = () => {
  const [weatherRecord, setWeatherRecord] = useState([]);
  const [location, searchWeather] = useWeather("tracy");
  const cleanRecord = useCleanRecord(weatherRecord, location);

  const onSubmit = (term) => {
    searchWeather(term);
  };

  useEffect(() => {
    setWeatherRecord((weatherRecord) => weatherRecord.concat(location));
  }, [location]);

  return (
    <div className="ui container">
      <Navigation submitSearch={onSubmit} />
      <hr />
      <div className="ui body">
        <Weather location={location} />
        <SearchHistory weatherRecord={cleanRecord} />
      </div>
    </div>
  );
};

export default App;
