import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function WeatherTracker({ weatherData } = this.props) {
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidty] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [pressure, setPressure] = useState(null);

  useEffect(() => {
    if (weatherData) {
      function setWeatherData() {
        setWindSpeed(weatherData.wind.speed);
        setHumidty(weatherData.main.humidity);
        setLat(weatherData.coord.lat);
        setLng(weatherData.coord.lon);
        setPressure(weatherData.main.pressure);
      }

      setWeatherData();
    }
  }, [weatherData]);

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

  if (weatherData) {
    return (
      <animated.div style={appearTop} className="weather-tracker">
        <h1>Weather Tracker</h1>
        <div className="weather-tracker__container">
          <div className="status-wind weather-tracker__inner-item">
            <p className="data-title">Wind Status</p>
            <p className="data-text">
              <strong>{windSpeed}</strong>&nbsp;mph
            </p>
          </div>
          <div className="status-humidity weather-tracker__inner-item">
            <p className="data-title">Humidity</p>
            <p className="data-text">
              <strong>{humidity}</strong>&nbsp;%
            </p>
          </div>
          <div className="status-visibility weather-tracker__inner-item">
            <p className="data-title">Coordinates</p>
            <p className="data-text">
              lat&nbsp;
              <strong>{lat}</strong>
              <br />
              lon&nbsp;<strong>{lng}</strong>
            </p>
          </div>
          <div className="status-pressure weather-tracker__inner-item">
            <p className="data-title">Air Pressure</p>
            <p className="data-text">
              <strong>{pressure}</strong>&nbsp;mb
            </p>
          </div>
        </div>
      </animated.div>
    );
  }

  return (
    <animated.div style={appearTop} className="weather-tracker">
      <h1>Weather Tracker</h1>
      <div>
        <p>Loading...</p>
      </div>
    </animated.div>
  );
}
