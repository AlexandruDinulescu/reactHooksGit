import React, { useState, useReducer } from "react";
import { initialState } from "./initialState";
import { globalReducer } from "./globalReducer";

function BuildStore() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return [state, dispatch];
}

export { BuildStore }
