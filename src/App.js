import React, { useState, useReducer } from "react";
import { BuildStore } from "./store/store";

import { SubApp } from "./SubComponents/SubComponent"

const GlobalContext = React.createContext(null);

const App = function App() {
  const [state, dispatch] = BuildStore();

  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <SubApp />
        <SubApp />
      </GlobalContext.Provider>
    </>
  );
}

export { App, GlobalContext };
