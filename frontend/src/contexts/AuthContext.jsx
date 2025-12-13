{/*used tutorial https://www.youtube.com/watch?v=2-6K-TMA-nw to understand and create authcontext*/} 
{/*used claude to help debug context issues*/} 

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userId', userData._id);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}