import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString().slice(2),
    };
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;