import Axios from "axios";
import { weatherKEY } from "../config.js";

export default Axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: weatherKEY,
    units: "imperial",
  },
});
