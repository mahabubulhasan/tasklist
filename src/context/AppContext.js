'use client';

import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Create context
export const AppContext = createContext(initialState);

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};