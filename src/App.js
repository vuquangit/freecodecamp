import React from "react";
import { Switch, Route } from "react-router-dom";
import Sass from "./Front End Libraries Certification (300 hours)/3. Sass";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sass" component={Sass} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
