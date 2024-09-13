import React, { createContext, useReducer, useEffect } from 'react';
import TaskReducer from './TaskReducer';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const TaskContext = createContext(initialState);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
