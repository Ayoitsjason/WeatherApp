import React, { useState } from "react";
import weatherAPI from "./api/weatherAPI";

const App = () => {
  const [weather, setWeather] = useState();

  const searchWeather = async () => {
    const response = await weatherAPI.get("/weather", {
      params: {
        q: "tracy",
      },
    });
    setWeather(response.data.main.temp);
  };

  searchWeather();

  return <div>{weather}</div>;
};

export default App;
