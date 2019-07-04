import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Sass from "./Front End Libraries Certification (300 hours)/3. Sass";
import Home from "./pages/home/Home";
import Page404 from "./pages/404/Page404";
import ReactJS from "./Front End Libraries Certification (300 hours)/4. React";
import Redux from "./Front End Libraries Certification (300 hours)/5. Redux";

function App() {
  return (
    <React.Fragment>
      <Link to={"/"}>
        <h5>
          <u>HOME</u>
        </h5>
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sass" component={Sass} />
        <Route path="/reactjs" component={ReactJS} />
        <Route path="/redux" component={Redux} />
        <Route component={Page404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
