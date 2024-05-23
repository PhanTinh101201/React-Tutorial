import React, { useReducer, useRef } from "react";

//useReducer
//1. Init State
const initState = {
  job: "",
  jobs: [],
};

// actions
const SET_JOB = "setJob";
const ADD_JOB = "addJob";
const DELETE_JOB = "deleteJob";

// reducer

const reducer = (state, action) => {
    console.log("state", state)
    console.log("action", action)

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action");
  }

  console.log("newState", newState)

  return newState;
};

const DemoTodoListWidthUseReducer = () => {
  // dispatch
  const [state, dispatch] = useReducer(reducer, initState);

  // Destructuring Es 6
  const { job, jobs } = state;

  // function get value input

  const setJob = (payLoad) => {
    return {
      type: SET_JOB,
      payload: payLoad,
    };
  };

  const addJob = (payLoad) => {
    return {
      type: ADD_JOB,
      payload: payLoad,
    };
  };

  const deleteJob = (payLoad) => {
    return {
      type: DELETE_JOB,
      payload: payLoad,
    };
  };

  const handelSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  const inputRef = useRef();

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        onChange={(e) => dispatch(setJob(e.target.value))}
        value={job}
        placeholder="Enter Todo"
      />
      <button onClick={handelSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job}
              <button onClick={() => dispatch(deleteJob(index))}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DemoTodoListWidthUseReducer;
