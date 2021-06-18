import React, { useEffect } from "react";
import WeatherDays from "../components/WeatherDays";
import WeatherTracker from "../components/WeatherTracker";

export default function AppContainer({ passlatlng } = this.props) {
  useEffect(() => {
    console.log(process.env.REACT_APP_OPENWEATHER_KEY);
  }, []);

  return (
    <div className="app-container">
      <div className="app-container__container">
        <h1 style={{ marginBottom: "15px" }}>5 day forecast</h1>
        <WeatherDays latlngdata={passlatlng} />
        <div className="app-container__sub-components">
          <WeatherTracker />
        </div>
      </div>
    </div>
  );
}
