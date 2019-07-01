import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import Page404 from "../../pages/Page404";
import sass_01 from "./3.01 Store Data with Sass Variables";
import sass_02 from "./3.02 Nest CSS with Sass";
import sass_03 from "./3.03 Create Reusable CSS with Mixins";

// List item in Sass
const sassItems = [
  { id: 0, title: "Store Data with Sass Variables", component: sass_01 },
  { id: 1, title: "Nest CSS with Sass", component: sass_02 },
  { id: 2, title: "Create Reusable CSS with Mixins", component: sass_03 },
  { id: 3, title: "Use @if and @else to Add Logic To Your Styles" },
  { id: 4, title: "Use @for to Create a Sass Loop" },
  { id: 5, title: "Use @each to Map Over Items in a List" },
  { id: 6, title: "Apply a Style Until a Condition is Met with @while" },
  { id: 7, title: "Split Your Styles into Smaller Chunks with Partials" },
  { id: 8, title: "Extend One Set of CSS Styles to Another Element" }
];

// Component main
class Sass extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div className="Sass">
        <Link to={match.url}>
          <p>
            <u>Sass</u>
          </p>
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
        <Link
          key={item.id}
          className="list-group-item"
          to={`${match.path}/${Text2Link(item.title)}`}
        >
          <li> {item.title} </li>
        </Link>
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
