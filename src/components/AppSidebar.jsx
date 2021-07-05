import React, { useEffect, useState } from "react";
import SidebarNavCont from "./SidebarNavCont";
import SidebarNavState from "./SidebarNavState";
import { getByLatLng } from "../controllers/openweather/api";
import Sunny from "../assets/images/sunny.jpg";

export default function AppSidebar({ passlatlng } = this.props) {
  const [currWeather, setCurrWeather] = useState("");

  const toCelcius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  useEffect(() => {
    function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        // Log data for testing

        console.log(res);
        setCurrWeather(res);
      });
    }
    setApiData(passlatlng.lat, passlatlng.lng, "weather");
  }, []);

  // If Data is loaded. Render this block of code
  if (currWeather) {
    const { main, description, icon } = currWeather.weather[0];
    const { temp } = currWeather.main;
    return (
      <div className="AppSidebar" style={{ backgroundImage: `url(${Sunny})` }}>
        <SidebarNavCont />
        <SidebarNavState
          main={main}
          description={description}
          temp={temp}
          icon={icon}
        />
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
