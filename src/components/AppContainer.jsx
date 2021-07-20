import React from "react";
import WeatherDays from "../components/WeatherDays";
import WeatherTracker from "../components/WeatherTracker";

export default function AppContainer(
  { passlatlng, weatherData, showData } = this.props
) {
  return (
    <div className="app-container">
      <div className="app-container__inner">
        {passlatlng && (
          <ul>
            <li>{showData.lat}</li>
            <li>{showData.lng}</li>
          </ul>
        )}

        {passlatlng && <WeatherDays latlngdata={passlatlng} />}

        <WeatherTracker weatherData={weatherData} />
      </div>
    </div>
  );
}
