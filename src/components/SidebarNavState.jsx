import React from "react";
import { toCelcius } from "../utils/helpers/converters";

export default function SidebarNavState(
  { main, temp, description, icon } = this.props
) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const theDate = new Date();
  const day = theDate.getDay();

  return (
    <div className="AppSidebar__weather-state">
      <div className="state__condition">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div className="state__condition__temp-and-day">
          <p>Today - {days[day]}</p>
          <span>{toCelcius(temp)}°C</span>
        </div>
      </div>
      <div className="state__info">
        <h1>{main}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
