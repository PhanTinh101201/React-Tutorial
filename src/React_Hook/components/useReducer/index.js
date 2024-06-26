import React, { useState, useReducer } from "react";
import DemoTodoListWidthUseReducer from "./TodoList";

// use state
// 1. Init state : 0
// 2. Actions : Up (state + 1) / Down (state -1)

// useReducer
//1. Init state : 0
// 2. Actions : Up (state + 1) / Down (state -1)
// 3. Reducer
// 4. Dispatch

//Init State
const initState = 0;
// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

const DemoUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button> */}
      <DemoTodoListWidthUseReducer/>
    </div>
  );
};

export default DemoUseReducer;
