import React from "react";
import SidebarNavCont from "./SidebarNavCont";
import SidebarNavState from "./SidebarNavState";
import Sunny from "../assets/images/sunny.jpg";

export default function AppSidebar({ weatherData } = this.props) {
  if (weatherData) {
    const { main, description, icon } = weatherData.weather[0];
    const { temp } = weatherData.main;
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
