import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHanler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const yearFilter = props.items.filter(kvercxi => {
  //   const rame = kvercxi.date.toString();
  //   return rame.match(filteredYear)

  // })

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear().toString());
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHanler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
