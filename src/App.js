import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getByLatLng } from "./controllers/openweather/api";
import AppContainer from "./components/AppContainer";
import AppSidebar from "./components/AppSidebar";
import AppSearch from "./components/AppSearch";
import Webfont from "webfontloader";

function App() {
  const [latlng, setLatlng] = useState({ lat: 51.5078788, lng: -0.0877321 });
  const [currWeather, setCurrWeather] = useState(null);

  const handleSetLatlng = (theData) => {
    setLatlng(theData);
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
    <div className="App">
      <Router>
        <div className="sidebar-container">
          <Switch>
            <Route exact path="/">
              <AppSidebar weatherData={currWeather} />
            </Route>
            <Route exact path="/search">
              <AppSearch passfunction={handleSetLatlng} />
            </Route>
          </Switch>
        </div>
        <AppContainer passlatlng={latlng} />
      </Router>
    </div>
  );
}

export default App;
