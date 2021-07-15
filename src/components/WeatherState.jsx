import React, { useEffect } from "react";
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
  WiRaindrop,
} from "react-icons/wi";

export default function WeatherState({ state } = this.props) {
  if (state) {
    if (state === "01d") return <WiDaySunny />;
    if (state === "01n") return <WiNightClear />;
    if (state === "11d") return <WiThunderstorm />;
    if (state === "09d") return <WiShowers />;
    if (state === "10d") return <WiDayShowers />;
    if (state === "13d") return <WiSnowflakeCold />;
    if (state === "50d") return <WiDust />;
    if (state === "02d") return <WiDayCloudy />;
    if (state === "03d") return <WiCloudy />;
    if (state === "04d") return <WiCloud />;
    if (state === "04n" || state === "03n" || state === "02n")
      return <WiNightAltPartlyCloudy />;
    if (state === "10n") return <WiRaindrop />;
  }
}
