import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getByLatLng } from "./controllers/openweather/api";
import AppContainer from "./components/AppContainer";
import AppSidebar from "./components/AppSidebar";
import AppSearch from "./components/AppSearch";
import Webfont from "webfontloader";

function App() {
  const [latlng, setLatlng] = useState({ lat: 51.5078788, lng: -0.0877321 });
  const [currCountry, setCurrCountry] = useState("Finding location");
  const [currWeather, setCurrWeather] = useState(null);

  const handleSetLatlng = (theData) => {
    console.log(theData.latlng);
    setLatlng(theData.latlng);
    setCurrCountry(theData.theCountry);
  };

  // Get Api when latlng state changes
  useEffect(() => {
    async function setApiData(lat, lng, theType) {
      return getByLatLng(lat, lng, theType).then((res) => {
        console.log(res);
        setCurrWeather(res);
      });
    }
    setApiData(latlng.lat, latlng.lng, "weather");
  }, [latlng]);

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Inter"],
      },
    });
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
              />
            </Route>
            <Route exact path="/search">
              <AppSearch passfunction={handleSetLatlng} />
            </Route>
          </Switch>
        </div>
        <AppContainer passlatlng={latlng} weatherData={currWeather} />
      </Router>
    </div>
  );
}

export default App;
