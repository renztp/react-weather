import React from "react";
import WeatherDays from "../components/WeatherDays";

export default function AppContainer() {
  return (
    <div className="app-container">
      <div className="app-container__container">
        <WeatherDays />
      </div>
    </div>
  );
}
