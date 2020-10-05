import React, { useState } from "react";
import { SwitchButton } from "./components/SwitchButton";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { Graphs } from "./components/Graphs";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  const [displayGraph, setDisplayGraph] = useState(false);

  return (
    <GlobalProvider>
      <div className="App">
        {displayGraph ? (
          <>
            <Balance />
            <IncomeExpenses />
            <Graphs />
            <SwitchButton
              displayGraph={displayGraph}
              setDisplayGraph={setDisplayGraph}
            />
          </>
        ) : (
          <>
            <Balance />
            <TransactionList />
            <SwitchButton
              displayGraph={displayGraph}
              setDisplayGraph={setDisplayGraph}
            />
            <AddTransaction />
          </>
        )}
      </div>
    </GlobalProvider>
  );
}

export default App;
