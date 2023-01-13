import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpsenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
      
    }
    props.onAddExpense(expenseData);
    
  };

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpsenseDateHandler} />
  </div>;
};

export default NewExpense;
