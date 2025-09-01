import React from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [menu, setMenu] = useState(false);

  const value = {
    menu,
    setMenu,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
