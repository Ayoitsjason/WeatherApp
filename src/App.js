import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation.js";
import Weather from "./components/Weather.js";
import SearchHistory from "./components/SearchHistory.js";
import useWeather from "./hooks/useWeather.js";
import useCleanRecord from "./hooks/useCleanRecord.js";
import "./App.css";

const App = () => {
  const [weatherRecord, setWeatherRecord] = useState([]);
  const [location, searchWeather, error] = useWeather("California");
  const cleanRecord = useCleanRecord(weatherRecord, location);

  const { temp } = location;

  const onSubmit = (term) => {
    searchWeather(term);
  };

  useEffect(() => {
    setWeatherRecord((weatherRecord) => weatherRecord.concat(location));
  }, [location]);

  return (
    <div
      className={
        "App " + (temp >= 80 ? "hot" : temp < 80 && temp > 70 ? "warm" : "cold")
      }
    >
      <div className="header ui center aligned container">
        <Navigation submitSearch={onSubmit} />
        <div className="ui grid container" style={{ marginTop: ".5rem" }}>
          <div className="two column row">
            <div className="ten wide column">
              <Weather location={location} error={error} />
            </div>
            <div className="six wide column">
              <SearchHistory weatherRecord={cleanRecord} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
