'use client';

import { AuthContextType } from '@/types';
import { deleteCookie, hasCookie } from 'cookies-next';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { loginAuth } from 'utils/auth';

// Context to pass loggin info to the whole app
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check if coookie exist for loggedin user
  useEffect(() => {
    const storedUser = hasCookie('user');
    if (storedUser) setIsLoggedIn(true);
  }, []);

  // login function
  const login = async (email: string, pass: string) => {
    await loginAuth(email, pass);
    setIsLoggedIn(true);
  };

  // logout function
  const logout = () => {
    deleteCookie('user');
    setIsLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn,
    login,
    logout
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

// exporting a hook which uses authContext
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
