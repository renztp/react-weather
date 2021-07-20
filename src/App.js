import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getByLatLng } from "./controllers/openweather/api";
import AppContainer from "./components/AppContainer";
import AppSidebar from "./components/AppSidebar";
import AppSearch from "./components/AppSearch";
import Webfont from "webfontloader";

function App() {
  const [latlng, setLatlng] = useState({ lat: 51.5078788, lng: -0.0877321 });
  const [currCountry, setCurrCountry] = useState(null);
  const [currWeather, setCurrWeather] = useState(null);

  const handleCurrCountry = async (country) => {
    await setCurrCountry(country);
  };

  const handleSetLatlng = async (theData) => {
    console.log(theData.latlng.lat);
    await setLatlng({ lat: theData.latlng.lat, lng: theData.latlng.lng });
    await setCurrCountry(theData.theCountry);
  };

  // Get Api when latlng state changes
  useEffect(() => {
    async function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        console.log(res);
        setCurrWeather(res);
      });
    }
    if (latlng) {
      setApiData(latlng.lat, latlng.lng, "weather");
    }
  }, [latlng]);

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Inter"],
      },
    });

    // Ask for Latlong Geolocation
    if (!navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setLatlng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    } else {
      // Set Default `London` Location
      setLatlng({ lat: 51.5078788, lng: -0.0877321 });
    }
  }, []);

  return (
    <div className="App" style={{ background: "#E9F5F9" }}>
      <Router>
        <div className="sidebar-container">
          <Switch>
            <Route exact path="/">
              <AppSidebar
                passfunction={handleSetLatlng}
                weatherData={currWeather}
                currLocation={currCountry}
                handleCurrCountry={handleCurrCountry}
              />
            </Route>
            <Route exact path="/search">
              <AppSearch passfunction={handleSetLatlng} />
            </Route>
          </Switch>
        </div>
        <AppContainer
          showData={latlng}
          passlatlng={latlng}
          weatherData={currWeather}
        />
      </Router>
    </div>
  );
}

export default App;
