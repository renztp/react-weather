import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import AppSidebar from "./components/AppSidebar";
import AppSearch from "./components/AppSearch";
import Webfont from "webfontloader";

function App() {
  const [latlng, setLatlng] = useState({ lat: 51.5078788, lng: -0.0877321 });

  const handleSetLatlng = (theData) => {
    setLatlng(theData);
    console.log(latlng ? latlng : null);
  };

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
              <AppSidebar passlatlng={latlng} />
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
