import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("ALL");

  const filterChangeHandler = (selectYear) => setFilteredYear(selectYear);

  const filterItemsList = [];
  if (filteredYear === "ALL") {
    props.items.forEach(function (expense) {
      filterItemsList.push(expense);
    });
  } else {
    props.items.forEach(function (expense) {
      if (expense.date.getFullYear().toString() === filteredYear) {
        filterItemsList.push(expense);
      }
    });
  }

  const filteredExpensesChart = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
      
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpensesChart} />

        <ExpensesList
          items = {filterItemsList}
        />

      </Card>
    </div>
  );
};

export default Expenses;
