import React, { useEffect } from "react";
import WeatherDays from "../components/WeatherDays";

export default function AppContainer() {
  useEffect(() => {
    console.log(process.env.REACT_APP_OPENWEATHER_KEY);
  }, []);

  return (
    <div className="app-container">
      <div className="app-container__container">
        <WeatherDays />
      </div>
    </div>
  );
}
