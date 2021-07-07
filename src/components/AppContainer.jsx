import React from "react";
import WeatherDays from "../components/WeatherDays";
import WeatherTracker from "../components/WeatherTracker";

export default function AppContainer({ passlatlng, weatherData } = this.props) {
  return (
    <div className="app-container">
      <div className="app-container__inner">
        <WeatherDays latlngdata={passlatlng} />
        <WeatherTracker weatherData={weatherData} />
      </div>
    </div>
  );
}
