import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Pie } from "react-chartjs-2";

export const Graphs = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeLabel = transactions
    .filter((item) => item.amount > 0)
    .map((item) => item.category);

  const incomeData = transactions
    .filter((item) => item.amount > 0)
    .map((item) => item.amount);

  const expenseLabel = transactions
    .filter((item) => item.amount < 0)
    .map((item) => item.category);

  const expenseData = transactions
    .filter((item) => item.amount < 0)
    .map((item) => item.amount);

  function vetValueData(labelList, valueList) {
    let newValue = [];
    for (let i = 0; i < labelList.length; i++) {
      for (let j = i + 1; j < labelList.length; j++) {
        if (labelList[i] === labelList[j]) {
          valueList[i] += valueList[j];
          valueList[j] = 0;
        }
      }
    }
    for (let i of valueList) {
      if (i !== 0) {
        newValue.push(i);
      }
    }
    return newValue;
  }

  const newExpenseLabel = expenseLabel.filter((v, i, a) => a.indexOf(v) === i);

  const newExpenseData = vetValueData(expenseLabel, expenseData);

  const newIncomeLabel = incomeLabel.filter((v, i, a) => a.indexOf(v) === i);

  const newIncomeData = vetValueData(incomeLabel, incomeData);

  const colors = [
    "rgba(120,200,120,0.5)",
    "rgba(255,99,71,0.5)",
    "rgba(135,206,250,0.5)",
    "rgba(240,230,140, 0.5)",
    "rgba(255,182,193, 0.5)",
  ];

  const incomeDataset = [
    {
      data: newIncomeData,
      backgroundColor: colors,
    },
  ];

  const expenseDataset = [
    {
      data: newExpenseData,
      backgroundColor: colors,
    },
  ];

  const incomePie = (
    <Pie
      data={{
        labels: newIncomeLabel,
        datasets: incomeDataset,
      }}
    />
  );

  const expensePie = (
    <Pie
      data={{
        labels: newExpenseLabel,
        datasets: expenseDataset,
      }}
    />
  );

  return (
    <div>
      <h4>Income Pie</h4>
      {incomePie}
      <h4>Expense Pie</h4>
      {expensePie}
    </div>
  );
};
