import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectYear => setFilteredYear(selectYear);

  const filterItems = [];
  
  props.items.forEach(function (expense) {
    if (expense.date.getFullYear() == filteredYear) {
      filterItems.push(expense);
    }
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filterItems.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          
        ))}
      </Card>

    </div>
  );
};

export default Expenses;
