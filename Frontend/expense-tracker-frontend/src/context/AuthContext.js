import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const register = async (username, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/register', { username, password });
    setToken(res.data.token);
    setIsAuthenticated(true);
  };

  const login = async (username, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
    setToken(res.data.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
