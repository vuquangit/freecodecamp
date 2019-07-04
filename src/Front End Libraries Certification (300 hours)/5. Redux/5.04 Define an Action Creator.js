/*
https://learn.freecodecamp.org/front-end-libraries/redux/define-an-action-creator

Redux: Define an Action Creator

After creating an action, the next step is sending the action to the Redux store so it can update 
its state. In Redux, you define action creators to accomplish this. An action creator is simply a 
JavaScript function that returns an action. In other words, action creators create objects that 
represent action events.

-------------------------------------------------------------------------------------------------
Define a function named actionCreator() that returns the action object when called.

const action = {
  type: 'LOGIN'
}
// Define an action creator here:

*/

import React from "react";
import { createStore } from "redux";

function reducer(state = 5, action) {
  switch (action.type) {
    case "LOGIN":
      return "LOGIN";
    default:
      return state;
  }
}

let store = createStore(reducer);

class Redux extends React.Component {
  render() {
    console.log(store.getState());
    console.log("action = {type:'LOGIN'}");
    const action = { type: "LOGIN" };
    const actionCreator = () => action;
    store.dispatch(actionCreator(action));
    console.log(store.getState());

    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
        <p>{`const action = {type:"LOGIN"};`}</p>
        <p>{`function actionCreator() { return action; }`}</p>
        <p>{`Result: ${store.getState()}`}</p>
      </div>
    );
  }
}
export default Redux;
