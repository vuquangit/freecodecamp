import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import Page404 from "../../pages/Page404";
import sass_01 from "./3.01 Store Data with Sass Variables";
import sass_02 from "./3.02 Nest CSS with Sass";
import sass_03 from "./3.03 Create Reusable CSS with Mixins";
import sass_04 from "./3.04 Use @if and @else to Add Logic To Your Styles";
import sass_05 from "./3.05 Use @for to Create a Sass Loop";
import sass_06 from "./3.06 Use @each to Map Over Items in a List";
import sass_07 from "./3.07 Apply a Style Until a Condition is Met with @while";
import sass_08 from "./3.08 Split Your Styles into Smaller Chunks with Partials";
import sass_09 from "./3.09 Extend One Set of CSS Styles to Another Element";

// List item in Sass
const sassItems = [
  { id: 1, title: "Store Data with Sass Variables", component: sass_01 },
  { id: 2, title: "Nest CSS with Sass", component: sass_02 },
  { id: 3, title: "Create Reusable CSS with Mixins", component: sass_03 },
  {
    id: 4,
    title: "Use @if and @else to Add Logic To Your Styles",
    component: sass_04
  },
  { id: 5, title: "Use @for to Create a Sass Loop", component: sass_05 },
  { id: 6, title: "Use @each to Map Over Items in a List", component: sass_06 },
  {
    id: 7,
    title: "Apply a Style Until a Condition is Met with @while",
    component: sass_07
  },
  {
    id: 8,
    title: "Split Your Styles into Smaller Chunks with Partials",
    component: sass_08
  },
  {
    id: 9,
    title: "Extend One Set of CSS Styles to Another Element",
    component: sass_09
  },
  {
    id: 10,
    title: "..."
  }
];

// Component main
class Sass extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div className="Sass">
        <Link to={match.url}>
          <h1>
            <u>Sass</u>
          </h1>
        </Link>
        <Switch>
          <Route
            exact
            path={match.path}
            component={() => <SassItem match={match} />}
          />
          {sassItems.map(item => (
            <Route
              key={item.id}
              path={`${match.path}/${Text2Link(item.title)}`}
              component={item.component}
            />
          ))}
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

// item
const SassItem = ({ match }) => {
  return (
    <ul className="list-group">
      {sassItems.map(item => (
        <div key={item.id} className="list-group-item">
          {item.component ? (
            <Link to={`${match.path}/${Text2Link(item.title)}`}>
              <li> {item.title} </li>
            </Link>
          ) : (
            <li> {item.title} </li>
          )}
        </div>
      ))}
    </ul>
  );
};

// hover item
$(document).ready(function() {
  $(".list-group-item").hover(
    function() {
      $(this).css("background-color", "lightblue");
    },
    function() {
      $(this).css("background-color", "white");
    }
  );
});

// Convert string to link format
function Text2Link(str) {
  return str
    .split("")
    .filter(i => i === " " || /\w/g.test(i))
    .join("")
    .replace(/\s+/g, "-")
    .toLocaleLowerCase()
    .trim();
}

export default Sass;
