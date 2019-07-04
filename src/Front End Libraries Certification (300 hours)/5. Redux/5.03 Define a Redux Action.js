/*
https://learn.freecodecamp.org/front-end-libraries/redux/define-a-redux-action

Redux: Define a Redux Action

Since Redux is a state management framework, updating state is one of its core tasks. In Redux, 
all state updates are triggered by dispatching actions. An action is simply a JavaScript object 
that contains information about an action event that has occurred. The Redux store receives these 
action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. 
For example, the action carries a username after a user logs in. While the data is optional, 
actions must carry a type property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app 
to the Redux store. The store then conducts the business of updating state based on the action that 
occurred.

---------------------------------------------------------------------------------------------------
Writing a Redux action is as simple as declaring an object with a type property. Declare an object 
action and give it a property type set to the string 'LOGIN'.

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
    store.dispatch({ type: "LOGIN" });
    console.log(store.getState());

    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
        <p>{`let action = {type:"LOGIN"};`}</p>
        <p>{`Result: ${store.getState()}`}</p>
      </div>
    );
  }
}
export default Redux;
