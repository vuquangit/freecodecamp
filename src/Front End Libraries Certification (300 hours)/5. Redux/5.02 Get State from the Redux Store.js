/*
https://learn.freecodecamp.org/front-end-libraries/redux/get-state-from-the-redux-store

Redux: Get State from the Redux Store

The Redux store object provides several methods that allow you to interact with it. For example, 
you can retrieve the current state held in the Redux store object with the getState() method.

-----------------------------------------------------------------------------------------------------
The code from the previous challenge is re-written more concisely in the code editor. Use 
store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line

*/
//https://redux.js.org/introduction/getting-started
import React from "react";
import { createStore } from "redux";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function reducer(state = 5) {
  return state;
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer);

class Redux extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
        <p>{`let currentState = store.getState();`}</p>
        <p>{`Result: ${store.getState()}`}</p>
      </div>
    );
  }
}
export default Redux;
