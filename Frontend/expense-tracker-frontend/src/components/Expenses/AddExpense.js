import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

function AddExpense() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense({ date, amount, category, description });
    setDate('');
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
