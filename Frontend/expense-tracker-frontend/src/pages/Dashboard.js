import React from 'react';
import AddExpense from '../components/Expenses/AddExpense';
import ExpenseList from '../components/Expenses/ExpenseList';
import AddCategory from '../components/Categories/AddCategory';
import CategoryList from '../components/Categories/CategoryList';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <AddExpense />
      <ExpenseList />
      <AddCategory />
      <CategoryList />
    </div>
  );
}

export default Dashboard;
