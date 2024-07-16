import React, { useState, useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

function AddCategory() {
  const [category, setCategory] = useState('');
  const { addCategory } = useContext(CategoryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category);
    setCategory('');
  };

  return (
    <div className="add-category">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}

export default AddCategory;
