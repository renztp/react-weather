import axios from "axios";

const api_key = process.env.REACT_APP_OPENWEATHER_KEY;
var date = new Date();
const targetHour = date.getDate() + ":" + date.getMonth;

/* 
! Need to create current hh:mm:ss hour to selected UTC TIME FORMAT
*/
/* function formatHour(){

} */

export function getByCityName(loc, type) {
  if (type === "weather") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_key}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  if (type === "forecast") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${api_key}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }
}

export function getByLatLng(lat, lng, type) {
  if (type === "weather") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }

  if (type === "forecast") {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${api_key}`
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));
  }
}
