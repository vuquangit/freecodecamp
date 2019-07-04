import React from "react";
import ItemsList from "../../components/ShowItems";
import redux_01 from "./5.01 Create a Redux Store";
import redux_02 from "./5.02 Get State from the Redux Store";
import redux_03 from "./5.03 Define a Redux Action";
import redux_04 from "./5.04 Define an Action Creator";
import redux_05 from "./5.05 Dispatch an Action Event";

const ReatcJSItems = [
  { id: 1, title: "Create a Redux Store", component: redux_01 },
  { id: 2, title: "Get State from the Redux Store", component: redux_02 },
  { id: 3, title: "Define a Redux Action", component: redux_03 },
  { id: 4, title: "Define an Action Creator", component: redux_04 },
  { id: 5, title: "Dispatch an Action Event", component: redux_05 }
];

class Redux extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <div className="redux">
          <ItemsList header={"Redux"} match={match} itemsList={ReatcJSItems} />
        </div>
      </div>
    );
  }
}
export default Redux;
