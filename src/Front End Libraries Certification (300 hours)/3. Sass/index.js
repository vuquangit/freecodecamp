import React from "react";
import ItemsList from "../../components/ShowItems";
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
        <ItemsList header={"Sass"} match={match} itemsList={sassItems} />
      </div>
    );
  }
}

export default Sass;
