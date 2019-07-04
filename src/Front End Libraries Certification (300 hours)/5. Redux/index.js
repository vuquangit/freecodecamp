import React from "react";
import ItemsList from "../../components/ShowItems";
import redux_01 from "./5.01 Create a Redux Store";
import redux_02 from "./5.02 Get State from the Redux Store";
import redux_03 from "./5.03 Define a Redux Action";
import redux_04 from "./5.04 Define an Action Creator";
import redux_05 from "./5.05 Dispatch an Action Event";
import redux_06 from "./5.06 Handle an Action in the Store";
import redux_07 from "./5.07 Use a Switch Statement to Handle Multiple Actions";
import redux_08 from "./5.08 Use const for Action Types";

const ReduxItems = [
  { id: 1, title: "Create a Redux Store", component: redux_01 },
  { id: 2, title: "Get State from the Redux Store", component: redux_02 },
  { id: 3, title: "Define a Redux Action", component: redux_03 },
  { id: 4, title: "Define an Action Creator", component: redux_04 },
  { id: 5, title: "Dispatch an Action Event", component: redux_05 },
  { id: 6, title: "Handle an Action in the Store", component: redux_06 },
  {
    id: 7,
    title: "Use a Switch Statement to Handle Multiple Actions",
    component: redux_07
  },
  {
    id: 8,
    title: "Use const for Action Types",
    component: redux_08
  }
];

class Redux extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <div className="redux">
          <ItemsList header={"Redux"} match={match} itemsList={ReduxItems} />
        </div>
      </div>
    );
  }
}
export default Redux;
