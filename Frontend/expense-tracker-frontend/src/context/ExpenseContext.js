import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useContext(AuthContext);

  const addExpense = async (expense) => {
    const res = await axios.post('http://localhost:5000/api/expenses', expense, {
      headers: { Authorization: token }
    });
    setExpenses([...expenses, res.data]);
  };

  const getExpenses = async () => {
    const res = await axios.get('http://localhost:5000/api/expenses', {
      headers: { Authorization: token }
    });
    setExpenses(res.data);
  };

  const updateExpense = async (id, updatedExpense) => {
    const res = await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedExpense, {
      headers: { Authorization: token }
    });
    setExpenses(expenses.map((expense) => (expense._id === id ? res.data : expense)));
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
      headers: { Authorization: token }
    });
    setExpenses(expenses.filter((expense) => expense._id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, getExpenses, updateExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
