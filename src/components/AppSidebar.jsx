import React from "react";
import SidebarNavCont from "./SidebarNavCont";
import SidebarNavState from "./SidebarNavState";
import Sunny from "../assets/images/sunny.jpg";
import { useSpring, animated } from "react-spring";

export default function AppSidebar(
  { weatherData, passfunction, currLocation, handleCurrCountry } = this.props
) {
  const fade = useSpring({
    from: {
      opacity: 0,
      backgroundImage: `url(${Sunny})`,
    },
    to: {
      opacity: 1,
      backgroundImage: `url(${Sunny})`,
    },
  });
  if (weatherData) {
    const { main, description, icon } = weatherData.weather[0];
    const { temp } = weatherData.main;
    return (
      <animated.div className="sidebar-contianer">
        <animated.div className="AppSidebar" style={fade}>
          <SidebarNavCont
            passfunction={passfunction}
            handleCurrCountry={handleCurrCountry}
          />
          <SidebarNavState
            main={main}
            description={description}
            temp={temp}
            icon={icon}
            location={currLocation}
          />
        </animated.div>
      </animated.div>
    );
  }

  return (
    <animated.div className="sidebar-container">
      <div className="AppSidebar">
        <SidebarNavCont />
        {/* <button onClick={(e) => callApi(e)}>Test Api</button> */}
        <div className="AppSidebar__weather-state">
          <h1>Loading...</h1>
        </div>
        <div className="AppSidebar__weather-visual"></div>
      </div>
    </animated.div>
  );
}
