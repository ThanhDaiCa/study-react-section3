import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// props are list reference parameters from App.js
const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 'e'+Math.random().toString
    };
    console.log('enteredExpenseData - ' + enteredExpenseData.title);
    console.log('saveExpenseDataHandler - ' + expenseData);
    props.onAddExpense(expenseData);
    
    setFormState(false);
  };

  const openForm = () => setFormState(true);

  const closeForm = () => setFormState(false);


  return (
    <div className='new-expense'>
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}


      {formState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={closeForm}
        />
      )}
      {!formState && <button onClick={openForm}>Add New Expense</button>}

    </div>
  );
};

export default NewExpense;
