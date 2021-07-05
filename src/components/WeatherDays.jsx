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
  useEffect(async () => {
    function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        // console.log(res);
        setWeatherForecast(
          // Get data with only 12:00:00 on dt_txt object
          res.list.filter((x) => x.dt_txt.split(" ")[1] == "12:00:00")
        );
      });
    }

    await setApiData(latlngdata.lat, latlngdata.lng, "forecast");
    // await console.log(weatherForecast);
  }, [latlngdata]);

  useEffect(() => {
    console.log(weatherForecast);
  }, [weatherForecast]);

  // If weatherForecast Data is received. Properly render forecast
  if (weatherForecast) {
    return (
      <div className="weather-days">
        {weatherForecast.map((item, index) => (
          <div className="weather-days__item" key={index}>
            <h2>{item.dt_txt}</h2>
            {/* <WeatherState state={item.main.temp} /> */}
            {item.weather.main}
            {/* {item.state === "Rainy" ? "Rainy" : "Sunny"} */}
            <ul>
              <li>16C</li>
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
