import axios from "axios";

const api_key = process.env.REACT_APP_OPENWEATHER_KEY;

export function getByCityName(loc, type) {
  if (type === "weather") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_key}`
      )
      .then((res) => res.data);
  }

  if (type === "forecast") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${api_key}`
      )
      .then((res) => res.data);
  }
}
