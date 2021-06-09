import React, { useEffect, useState } from "react";
import SidebarNavCont from "./SidebarNavCont";
import { getByCityName } from "../controllers/openweather/api";

export default function AppSidebar() {
  const [currWeather, setCurrWeather] = useState("");

  const toCelcius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  useEffect(() => {
    function setApiData() {
      return getByCityName("Philippines").then((res) => {
        // Log data for testing
        console.log(res);
        setCurrWeather(res);
      });
    }
    setApiData();
  }, []);

  if (currWeather) {
    const { main, description } = currWeather.weather[0];
    const { temp } = currWeather.main;
    return (
      <div className="AppSidebar">
        <SidebarNavCont />
        <div className="AppSidebar__weather-state">
          <h1>{main}</h1>
          <p>{description}</p>
          <span>{toCelcius(temp)}°C</span>
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
