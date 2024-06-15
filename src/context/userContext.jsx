import React, { createContext, useState } from 'react';

// Create a context with a default value
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [pessoas, setPessoas] = useState([]); // funcao e funcao (set) que a altera = valor (no caso, é uma lista)
  const [loading, setLoading] = useState(true) 

  return (
    <UserContext.Provider value={{ pessoas, setPessoas, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
