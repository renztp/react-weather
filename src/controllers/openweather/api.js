import axios from "axios";

const api_base = "http://api.openweathermap.org/data/2.5/";
const api_key = "Get APi openweather";

export function getByCityName(loc) {
  return axios
    .get(`${api_base}weather?q=${loc}&appid=${api_key}`)
    .then((res) => res.data);
}
