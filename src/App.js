import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import AppSidebar from "./components/AppSidebar";
import AppSearch from "./components/AppSearch";
import Webfont from "webfontloader";

function App() {
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
            <Route exact path="/" component={AppSidebar} />
            <Route exact path="/search" component={AppSearch} />
          </Switch>
        </div>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;
