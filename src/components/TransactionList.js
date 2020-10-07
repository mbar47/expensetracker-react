import React, { useContext, useState } from "react";
import { Transaction } from "./Transaction";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const [hideHistory, setHideHistory] = useState(false);

  const handleHideHistory = (e) => setHideHistory(!hideHistory);

  return (
    <div className="trans-his-container">
      <h3 onClick={handleHideHistory}>
        History{" "}
        <FontAwesomeIcon
          pull="right"
          icon={hideHistory ? faAngleDown : faAngleUp}
        />
      </h3>
      {!hideHistory ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
