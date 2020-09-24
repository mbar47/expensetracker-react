import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add transaction</h3>
      <form action="" id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"></label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="enter amount"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
