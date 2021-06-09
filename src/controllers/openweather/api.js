import axios from "axios";

const api_base = "http://api.openweathermap.org/data/2.5/";
const api_key = "548a89a45975b131c4853b6dc60d96ac";

export function getByCityName(loc) {
  return axios
    .get(`${api_base}weather?q=${loc}&appid=${api_key}`)
    .then((res) => res.data);
}
