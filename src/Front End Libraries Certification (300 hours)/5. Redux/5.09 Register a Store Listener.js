/*
https://learn.freecodecamp.org/front-end-libraries/redux/register-a-store-listener

Redux: Register a Store Listener

Another method you have access to on the Redux store object is store.subscribe(). This allows you 
to subscribe listener functions to the store, which are called whenever an action is dispatched 
against the store. One simple use for this method is to subscribe a function to your store that 
simply logs a message every time an action is received and the store is updated.

--------------------------------------------------------------------------------------------------------
Write a callback function that increments the global variable count every time the store receives 
an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() 
is called three times in a row, each time directly passing in an action object. Watch the console 
output between the action dispatches to see the updates take place.

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line

// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

*/
import React from "react";
import { createStore } from "redux";

const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
store.subscribe(() => (count = store.getState()));
// change code above this line

class Redux extends React.Component {
  componentDidMount() {
    console.clear();
    store.dispatch({ type: ADD });
    console.log(count);
    store.dispatch({ type: ADD });
    console.log(count);
    store.dispatch({ type: ADD });
    console.log(count);
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
