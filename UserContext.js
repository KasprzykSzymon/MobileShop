import React, { createContext, useReducer, useContext } from 'react';
const UserContext = createContext();
const initialState = {
  user: null,
};
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser musi być używane wewnątrz UserProvider');
  }
  return context;
};
export { UserProvider, useUser };
