import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ExpenseProvider } from './context/ExpenseContext';
import { CategoryProvider } from './context/CategoryContext';
import './styles.css';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ExpenseProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ExpenseProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
