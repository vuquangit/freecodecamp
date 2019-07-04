/*
https://learn.freecodecamp.org/front-end-libraries/redux/use-const-for-action-types

Redux: Use const for Action Types
A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.


Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.

Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

// change code below this line

// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

*/
import React from "react";
import { createStore } from "redux";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      };
    case LOGOUT:
      return {
        authenticated: false
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

store.dispatch(loginUser());
store.dispatch(logoutUser());

class Redux extends React.Component {
  componentDidMount() {
    console.clear();
    console.log(store.getState());
    console.log(loginUser());
    store.dispatch(loginUser());
    console.log(store.getState());
    console.log(logoutUser());
    store.dispatch(logoutUser());
    console.log(store.getState());
  }
  render() {
    return (
      <div>
        <p>{`(Open browser console to see)`}</p>
      </div>
    );
  }
}
export default Redux;
