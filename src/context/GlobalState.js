import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//init state
const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "food", amount: 210 },
    { id: 3, text: "hobby", amount: -40 },
    { id: 4, text: "thing", amount: -13 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
