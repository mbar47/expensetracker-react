import React from "react";

export const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li id="list" className="minus">
          Para<span>123sek</span>
          <buttom className="delete-btn">x</buttom>
        </li>
      </ul>
    </div>
  );
};
