import React, { useContext } from 'react';
import { CategoryContext } from '../../context/CategoryContext';

function CategoryList() {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
