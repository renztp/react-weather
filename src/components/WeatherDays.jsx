import React, { useEffect, useState } from "react";
import { formatDay } from "../utils/helpers/formatters";
import { getByLatLng } from "../controllers/openweather/api";
import { toCelcius, toFahrenheit } from "../utils/helpers/converters";
import WeatherState from "./WeatherState";

// React Spring
import { useSpring, animated } from "react-spring";

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

  const appearTop = useSpring({
    from: {
      position: "relative",
      top: "-150px",
      opacity: 0,
    },
    to: {
      position: "relative",
      top: "0",
      opacity: 1,
    },
  });

  // If weatherForecast Data is received. Properly render forecast
  if (weatherForecast) {
    return (
      <animated.div className="weather-days" style={appearTop}>
        <h1 style={{ marginBottom: "15px" }}>Forecast - 5 day / 3 hours</h1>
        <div className="weather-days__container">
          {weatherForecast.map((item, index) => (
            <div className="weather-days__item" key={index}>
              <h2>{formatDay(item.dt_txt.split(" ")[0])}</h2>
              <WeatherState state={item.weather[0].icon} />
              <ul>
                <li>{toCelcius(item.main.temp)}°C</li>
                <li>{toFahrenheit(item.main.temp)}°F</li>
              </ul>
            </div>
          ))}
        </div>
      </animated.div>
    );
  }

  // Else just render a loading message...
  return (
    <animated.div className="weather-days" style={appearTop}>
      <h1 style={{ marginBottom: "15px" }}>Forecast - 5 day / 3 hours</h1>
      <div className="weather-days__container">Loading...</div>
    </animated.div>
  );
}
