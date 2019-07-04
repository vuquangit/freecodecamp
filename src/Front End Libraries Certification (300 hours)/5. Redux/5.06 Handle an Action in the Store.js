/*
https://learn.freecodecamp.org/front-end-libraries/redux/handle-an-action-in-the-store

Redux: Handle an Action in the Store

After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of 
a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions. 
A reducer takes state and action as arguments, and it always returns a new state. It is important to see that this is the 
only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. 
The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new 
copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for 
enforcing it in the code of your reducer functions. You'll practice this in later challenges.


The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer 
function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it 
returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can 
access the action's type directly with action.type.

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

*/
import React from "react";
import { createStore } from "redux";

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { login: true };
    default:
      return state;
  }
};

const store = createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};

class Redux extends React.Component {
  componentDidMount() {
    console.log(store.getState());
    console.log("action = {type:'LOGIN'}");
    store.dispatch(loginAction());
    console.log(store.getState());
  }
  render() {
    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
        <p>
          {`const reducer = (state = defaultState, action) => {
            switch (action.type) {
                case "LOGIN":
                return { login: true };
                default:
                return state;
            }
            };`}
        </p>
        <p>
          {`const loginAction = () => {
            return {
                type: "LOGIN"
            };
            };`}
        </p>
        <p>{` store.dispatch(loginAction());`}</p>
        <p>{`Result: ${store.getState().login}`}</p>
      </div>
    );
  }
}
export default Redux;
