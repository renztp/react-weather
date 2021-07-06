import React from "react";
import WeatherDays from "../components/WeatherDays";
import WeatherTracker from "../components/WeatherTracker";

export default function AppContainer({ passlatlng, weatherData } = this.props) {
  return (
    <div className="app-container">
      <div className="app-container__container">
        <h1 style={{ marginBottom: "15px" }}>Forecast - 5 day / 3 hours</h1>
        <WeatherDays latlngdata={passlatlng} />
        <div className="app-container__sub-components">
          <WeatherTracker weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}
