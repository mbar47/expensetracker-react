import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li id="list" className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)} SEK
      </span>
      <span>kategori</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
