import { useState, useEffect } from "react";
import weatherAPI from "../api/weatherAPI.js";

const useWeather = (defaultSearchTerm) => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    searchWeather(defaultSearchTerm);
  }, [defaultSearchTerm, setError]);

  const searchWeather = async (term) => {
    try {
      const response = await weatherAPI.get("/weather", {
        params: {
          q: term,
        },
      });
      setLocation({
        name: response.data.name,
        id: response.data.id,
        temp: response.data.main.temp,
      });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return [location, searchWeather, error];
};

export default useWeather;
