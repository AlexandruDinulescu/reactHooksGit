import React, { useState, useReducer, useContext } from "react";
import { GlobalContext } from "./../App";
import { BuildStore } from "./../store/store";

const SubApp = function SubApp() {

  // const [state, dispatch] = BuildStore();
  const { state, dispatch } = useContext(GlobalContext);

  const increment = (evt, payload) => {
    dispatch({ type: "increment", payload });
  }

  const decrement = (evt, payload) => {
    dispatch({ type: "decrement", payload });
  }

  const throwError = () => {
    dispatch({ type: "throw_error" })
  }

  return (
    <>
      Count: {state.count}
      <button style={{ marginLeft: "10px", marginRight: "10px" }} onClick={(evt) => increment(evt, 2)}>+</button>
      <button style={{ marginLeft: "10px", marginRight: "10px" }} onClick={(evt) => decrement(evt, 2)}>-</button>
      <button onClick={() => throwError()}> Same State Error </button> <br /> <br />
    </>
  );
}

export { SubApp };
