/*
https://learn.freecodecamp.org/front-end-libraries/redux/dispatch-an-action-event

Redux: Dispatch an Action Event

dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() 
and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the action that 
has occurred. Then the method dispatches an action object to the Redux store. Based on the previous 
challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

-------------------------------------------------------------------------------------------------------
The Redux store in the code editor has an initialized state that's an object containing a login 
property currently set to false. There's also an action creator called loginAction() which returns 
an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, 
and pass in the action created by loginAction().

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

*/

import React from "react";
import { createStore } from "redux";

const store = createStore((state = { login: false }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { login: true };
    default:
      return state;
  }
});

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};

class Redux extends React.Component {
  render() {
    console.log(store.getState());
    console.log("action = {type:'LOGIN'}");
    store.dispatch(loginAction());
    console.log(store.getState());

    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
        <p>{`const loginAction = () => {
            return {
                type: "LOGIN"
            };
            };`}</p>
        <p>{` store.dispatch(loginAction());`}</p>
        <p>{`Result: ${store.getState().login}`}</p>
      </div>
    );
  }
}
export default Redux;
