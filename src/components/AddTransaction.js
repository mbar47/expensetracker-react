import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("other");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
      category: category,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add transaction</h3>
      <form onSubmit={onSubmit} action="" id="form">
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
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="enter amount"
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option value="Other">Other</option>
            <option value="Income">Income</option>
            <option value="Food">Food</option>
            <option value="Junk">Junk</option>
            <option value="Hobby">Hobby</option>
            <option value="Housing cost">Housing cost</option>
          </select>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
