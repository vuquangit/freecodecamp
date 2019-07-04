import React from "react";
import logo from "../../logo.svg";
import "../../App.sass";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/sass">Learn Sass</Link>
          <Link to="/reactjs">Learn ReactJS</Link>
          <Link to="/redux">Learn Redux</Link>
        </header>
      </div>
    );
  }
}

export default Home;
