import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const savedUser = localStorage.getItem('user');

  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : { registered: false });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
