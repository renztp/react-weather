import React, { useEffect, useState } from "react";

import { getByLatLng } from "../controllers/openweather/api";
import { toCelcius } from "../utils/helpers/converters";
import WeatherState from "./WeatherState";

export default function WeatherDays({ latlngdata } = this.props) {
  const [weatherForecast, setWeatherForecast] = useState(null);
  useEffect(() => {
    async function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        // console.log(res);
        setWeatherForecast(
          // Get data with only 12:00:00 on dt_txt object
          res.list.filter((x) => x.dt_txt.split(" ")[1] === "15:00:00")
        );
      });
    }

    setApiData(latlngdata.lat, latlngdata.lng, "forecast");
    // await console.log(weatherForecast);
  }, [latlngdata.lat, latlngdata.lng]);

  useEffect(() => {
    console.log(weatherForecast);
  }, [weatherForecast]);

  // If weatherForecast Data is received. Properly render forecast
  if (weatherForecast) {
    return (
      <div className="weather-days">
        {weatherForecast.map((item, index) => (
          <div className="weather-days__item" key={index}>
            <h2>{item.dt_txt.split(" ")[0].split("-")[1]}</h2>
            {
              // TODO: Need to convert to proper format
              // i.e Day text, Month Day-number (Sun, June 7)
            }
            <WeatherState state={item.weather[0].icon} />
            {/* {item.weather[0].icon} */}
            {/* {item.state === "Rainy" ? "Rainy" : "Sunny"} */}
            <ul>
              <li>{toCelcius(item.main.temp)}°C</li>
              <li>11C</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Else just render a loading message...
  return <div className="weather-days">Loading...</div>;
}
