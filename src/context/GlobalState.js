import React, { createContext, useReducer, useEffect } from "react";
import { Transaction } from "../components/Transaction";
import AppReducer from "./AppReducer";

//init state
const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const localExpense = JSON.parse(localStorage.getItem("expenses"));
  const [state, dispatch] = useReducer(
    AppReducer,
    localExpense || initialState
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state));
  }, [state]);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
