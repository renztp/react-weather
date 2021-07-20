import React from "react";
import { toCelcius } from "../utils/helpers/converters";
import { useSpring, animated } from "react-spring";
import { MdLocationOn } from "react-icons/md";
import WeatherState from "./WeatherState";

export default function SidebarNavState(
  { main, temp, description, icon, location } = this.props
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

  const appearBounceTop = useSpring({
    from: {
      bottom: "13%",
      opacity: 0,
    },
    to: {
      bottom: "10%",
      opacity: 1,
    },
  });

  return (
    <animated.div style={appearBounceTop} className="AppSidebar__weather-state">
      <div className="state__condition">
        {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /> */}
        <WeatherState style={{ fill: "#fff" }} state={icon} />
        <div className="state__condition__temp-and-day">
          <p>Today - {days[day]}</p>
          <span>{toCelcius(temp)}°C</span>
        </div>
      </div>
      <div className="state__info">
        <h1>{main}</h1>
        {location && (
          <p>
            <MdLocationOn />
            {location}
          </p>
        )}
      </div>
    </animated.div>
  );
}
