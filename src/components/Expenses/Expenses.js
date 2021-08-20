import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("ALL");

  const filterChangeHandler = (selectYear) => setFilteredYear(selectYear);

  const filterItems = [];

  if (filteredYear === "ALL") {
    props.items.forEach(function (expense) {
        filterItems.push(expense);
    });
  } else {
    props.items.forEach(function (expense) {
      if (expense.date.getFullYear().toString() === filteredYear) {
        filterItems.push(expense);
      }
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList
          items = {filterItems}
        />

      </Card>
    </div>
  );
};

export default Expenses;
