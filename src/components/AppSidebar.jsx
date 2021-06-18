import React, { useEffect, useState } from "react";
import SidebarNavCont from "./SidebarNavCont";
import { getByLatLng } from "../controllers/openweather/api";

export default function AppSidebar({ passlatlng } = this.props) {
  const [currWeather, setCurrWeather] = useState("");

  const toCelcius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  useEffect(() => {
    function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        // Log data for testing

        // console.log(res);
        setCurrWeather(res);
      });
    }
    setApiData(passlatlng.lat, passlatlng.lng, "weather");
  }, []);

  if (currWeather) {
    const { main, description } = currWeather.weather[0];
    const { temp } = currWeather.main;
    return (
      <div className="AppSidebar">
        <SidebarNavCont />
        <div className="AppSidebar__weather-state">
          <h1>{main}</h1>
          <span>{toCelcius(temp)}°C</span>
          <p>{description}</p>
        </div>

        <div className="AppSidebar__weather-visual"></div>
      </div>
    );
  }

  return (
    <div className="AppSidebar">
      <SidebarNavCont />
      {/* <button onClick={(e) => callApi(e)}>Test Api</button> */}

      <div className="AppSidebar__weather-state">
        <h1>Loading...</h1>
      </div>
      <div className="AppSidebar__weather-visual"></div>
    </div>
  );
}
