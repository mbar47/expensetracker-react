import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Other");
  const [hideTrans, setHideTrans] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
      category: category,
    };

    if (text === "" || amount === 0) {
      alert("Transaction requires all fields to be filled!");
    } else {
      addTransaction(newTransaction);
    }
  };

  const hideTransaction = () => setHideTrans(!hideTrans);
  return (
    <div className="trans-his-container">
      <h3 onClick={hideTransaction}>
        Add transaction{" "}
        <FontAwesomeIcon
          pull="right"
          icon={hideTrans ? faAngleDown : faAngleUp}
        />
      </h3>
      {!hideTrans ? (
        <form onSubmit={onSubmit} action="" id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="text"
              placeholder="add description..."
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
              <option value="Income">Salary</option>
              <option value="Food">Food</option>
              <option value="Junk">Junk</option>
              <option value="Hobby">Hobby</option>
              <option value="Housing cost">Housing cost</option>
            </select>
          </div>
          <button className="btn">Add transaction</button>
        </form>
      ) : null}
    </div>
  );
};
