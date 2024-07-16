import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../../context/ExpenseContext';

function ExpenseItem({ expense }) {
  const { deleteExpense, updateExpense } = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(expense.date);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [description, setDescription] = useState(expense.description);

  const handleUpdate = async () => {
    await updateExpense(expense._id, { date, amount, category, description });
    setIsEditing(false);
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
          <p>Amount: {amount}</p>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteExpense(expense._id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
