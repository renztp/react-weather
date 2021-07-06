import React from "react";

export default function WeatherTracker() {
  return (
    <div className="weather-tracker">
      <h1>Weather Tracker</h1>
      <div className="weather-tracker__container">
        <div className="status-wind weather-tracker__inner-item"></div>
        <div className="status-humidity weather-tracker__inner-item"></div>
        <div className="status-visibility weather-tracker__inner-item"></div>
        <div className="status-pressure weather-tracker__inner-item"></div>
      </div>
    </div>
  );
}
