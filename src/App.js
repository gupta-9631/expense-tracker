// import ExpenseItem from './Components/ExpenseItem';
import React, { useEffect, useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
let Dummy__expenses = [];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy__expenses);

  useEffect(() => {
    fetch("")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExpenses(data);
      });
  }, []);

  // function to get data from child
  const addExpensehandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
