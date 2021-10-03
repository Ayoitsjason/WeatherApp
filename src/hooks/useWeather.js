import { useState, useEffect } from "react";
import weatherAPI from "../api/weatherAPI.js";

const useWeather = (defaultSearchTerm) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    searchWeather(defaultSearchTerm);
  }, [defaultSearchTerm]);

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
    } catch (err) {
      console.log("Failed fetching API");
    }
  };

  return [location, searchWeather];
};

export default useWeather;
