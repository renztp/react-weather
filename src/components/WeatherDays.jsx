import React, { useState } from "react";
import { WiCloudy, WiDaySunny, WiDayShowers, WiRainMix } from "react-icons/wi";

function WeatherState({ state } = this.props) {
  if (state === "Cloudy") return <WiCloudy />;
  if (state === "Rainy") return <WiRainMix />;
  if (state === "Sunny") return <WiDaySunny />;
  if (state === "Shower") return <WiDayShowers />;
}

export default function WeatherDays(state) {
  const validateWeatherState = () => {
    if (state === "Cloudy") return <WiCloudy />;
    if (state === "Rainy") return <WiRainMix />;
    if (state === "Sunny") return <WiDaySunny />;
    if (state === "Shower") return <WiDayShowers />;
  };

  const [weatherdays, setWeatherdays] = useState([
    {
      id: 1,
      date: "Tomorrow",
      state: "Shower",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 2,
      date: "Sun, 7 Jun",
      state: "Shower",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 3,
      date: "Mon, 8 Jun",
      state: "Rainy",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 4,
      date: "Tue, 9 Jun",
      state: "Sunny",
      min_degree: "16C",
      max_degree: "11C",
    },
    {
      id: 5,
      date: "Wed, 10 Jun",
      state: "Sunny",
      min_degree: "16C",
      max_degree: "11C",
    },
  ]);

  return (
    <div className="weather-days">
      {weatherdays.map((item) => (
        <div className="weather-days__item">
          <h2>{item.date}</h2>
          <WeatherState state={item.state} />
          {item.state === "Rainy" ? "Rainy" : "Sunny"}
          <ul>
            <li>{item.min_degree}</li>
            <li>{item.max_degree}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
