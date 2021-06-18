import React, { useEffect, useState } from "react";
import { WiCloudy, WiDaySunny, WiDayShowers, WiRainMix } from "react-icons/wi";
import { getByLatLng } from "../controllers/openweather/api";

function WeatherState({ state } = this.props) {
  if (state === "Cloudy") return <WiCloudy />;
  if (state === "Rainy") return <WiRainMix />;
  if (state === "Sunny") return <WiDaySunny />;
  if (state === "Shower") return <WiDayShowers />;
}

export default function WeatherDays({ latlngdata } = this.props) {
  const [weatherdays, setWeatherdays] = useState([
    {
      id: 1,
      date: "Tomorrow",
      state: "Shower",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 2,
      date: "Sun, 7 Jun",
      state: "Shower",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 3,
      date: "Mon, 8 Jun",
      state: "Rainy",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 4,
      date: "Tue, 9 Jun",
      state: "Sunny",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 5,
      date: "Wed, 10 Jun",
      state: "Sunny",
      min_degree: "16C",
      max_degree: "11C",
    },
  ]);

  const [weatherForecast, setWeatherForecast] = useState(null);
  useEffect(() => {
    function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        setWeatherForecast(res);
      });
    }

    setApiData(latlngdata.lat, latlngdata.lng, "forecast");
    console.log(weatherForecast);
  }, [latlngdata]);

  return (
    <div className="weather-days">
      {weatherdays.map((item, index) => (
        <div className="weather-days__item" key="index">
          <h2>{item.date}</h2>
          <WeatherState state={item.state} />
          {item.state === "Rainy" ? "Rainy" : "Sunny"}
          <ul>
            <li>{item.min_degree}</li>
            <li>{item.max_degree}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
