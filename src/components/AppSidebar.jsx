import React, { useEffect, useState } from "react";
import SidebarNavCont from "./SidebarNavCont";
import axios from "axios";
import { getByCityName } from "../controllers/openweather/api";

export default function AppSidebar() {
  const [currWeather, setCurrWeather] = useState("");

  useEffect(() => {
    getByCityName("Philippines").then((res) => setCurrWeather(res));
  }, []);

  if (currWeather) {
    console.log(currWeather.weather[0]);
    const { main, description } = currWeather.weather[0];
    return (
      <div className="AppSidebar">
        <SidebarNavCont />
        <div
          className="AppSidebar__weather-state"
          style={{ textAlign: "center;" }}
        >
          <h1>{main}</h1>
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
      Loading...
      <div className="AppSidebar__weather-visual"></div>
    </div>
  );
}
