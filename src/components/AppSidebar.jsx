import React, { useState, useEffect } from "react";
import SidebarNavCont from "./SidebarNavCont";
import SidebarNavState from "./SidebarNavState";
import Sunny from "../assets/images/sunny.jpg";
import { useSpring, animated } from "react-spring";

export default function AppSidebar(
  { weatherData, passfunction, currLocation, handleCurrCountry } = this.props
) {
  const [weatherBg, setWeatherBg] = useState(null);

  function getWeatherBg(type) {
    var bg;
    var assortBg = {
      Clouds: function () {
        bg =
          "https://images.unsplash.com/photo-1548266652-99cf27701ced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80";
      },
      Thunderstorm: function () {
        bg =
          "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80";
      },
      Drizzle: function () {
        bg =
          "https://images.unsplash.com/photo-1573151892117-efd764c9949f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80";
      },
      Rain: function () {
        bg =
          "https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80";
      },
      Snow: function () {
        bg =
          "https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80";
      },
      Atmosphere: function () {
        bg =
          "https://images.unsplash.com/photo-1598719074256-89351407950d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80";
      },
      Clear: function () {
        bg =
          "https://images.unsplash.com/photo-1495110823793-aa4ed8127d6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80";
      },
    };
    (assortBg[type] || assortBg["Clear"])();

    return bg;
  }

  useEffect(() => {
    // setWeatherBg(getWeatherBg(main));
    // var str = 'bar.' + weatherData.weather[0].main;
    // console.log(getWeatherBg(weatherDatamain));
    if (weatherData) {
      setWeatherBg(getWeatherBg(weatherData.weather[0].main));
    }
  }, [weatherData]);

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  if (weatherData) {
    const { main, description, icon } = weatherData.weather[0];
    const { temp } = weatherData.main;
    return (
      <animated.div className="sidebar-container" style={fade}>
        <div
          className="AppSidebar"
          style={{ backgroundImage: `url(${weatherBg})` }}
        >
          <SidebarNavCont
            passfunction={passfunction}
            handleCurrCountry={handleCurrCountry}
            weatherData={weatherData}
          />
          <SidebarNavState
            main={main}
            description={description}
            temp={temp}
            icon={icon}
            location={currLocation}
          />
        </div>
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
