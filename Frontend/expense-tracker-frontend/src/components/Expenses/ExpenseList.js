import React, { useContext, useEffect } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
  const { expenses, getExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.map(expense => (
        <ExpenseItem key={expense._id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;

