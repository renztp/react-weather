import React, { useEffect, useState } from "react";
import {
  WiCloudy,
  WiDaySunny,
  WiDayShowers,
  WiShowers,
  WiNightClear,
  WiThunderstorm,
  WiSnowflakeCold,
  WiDust,
  WiDayCloudy,
  WiCloud,
  WiNightAltPartlyCloudy,
} from "react-icons/wi";
import { getByLatLng } from "../controllers/openweather/api";
import { toCelcius } from "../utils/helpers/converters";

function WeatherState({ state } = this.props) {
  if (state === "01d") return <WiDaySunny />;
  if (state === "01n") return <WiNightClear />;
  if (state === "11d") return <WiThunderstorm />;
  if (state === "09d") return <WiShowers />;
  if (state === "10d") return <WiDayShowers />;
  if (state === "13d") return <WiSnowflakeCold />;
  if (state === "50d") return <WiDust />;
  if (state === "02d") return <WiDayCloudy />;
  if (state === "02n") return <WiNightAltPartlyCloudy />;
  if (state === "03d") return <WiCloudy />;
  if (state === "03n") return <WiNightAltPartlyCloudy />;
  if (state === "04d") return <WiCloud />;
  if (state === "04n") return <WiNightAltPartlyCloudy />;
}

export default function WeatherDays({ latlngdata } = this.props) {
  const [weatherForecast, setWeatherForecast] = useState(null);
  useEffect(async () => {
    function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        // console.log(res);
        setWeatherForecast(
          // Get data with only 12:00:00 on dt_txt object
          res.list.filter((x) => x.dt_txt.split(" ")[1] == "15:00:00")
        );
      });
    }

    await setApiData(latlngdata.lat, latlngdata.lng, "forecast");
    // await console.log(weatherForecast);
  }, [latlngdata]);

  useEffect(() => {
    console.log(weatherForecast);
  }, [weatherForecast]);

  // If weatherForecast Data is received. Properly render forecast
  if (weatherForecast) {
    return (
      <div className="weather-days">
        {weatherForecast.map((item, index) => (
          <div className="weather-days__item" key={index}>
            <h2>{item.dt_txt.split(" ")[0].split("-")[1]}</h2>
            {
              // TODO: Need to convert to proper format
              // i.e Day text, Month Day-number (Sun, June 7)
            }
            <WeatherState state={item.weather[0].icon} />
            {/* {item.weather[0].icon} */}
            {/* {item.state === "Rainy" ? "Rainy" : "Sunny"} */}
            <ul>
              <li>{toCelcius(item.main.temp)}°C</li>
              <li>11C</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Else just render a loading message...
  return <div className="weather-days">Loading...</div>;
}
