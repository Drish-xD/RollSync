'use client';

import { deleteCookie, hasCookie } from 'cookies-next';
// Auth login here (login | register)
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { loginAuth } from 'utils/auth';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (email: string, pass: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = hasCookie('user');
    if (storedUser) setIsLoggedIn(true);
  }, []);

  const login = async (email: string, pass: string) => {
    await loginAuth(email, pass);
    setIsLoggedIn(true);
  };

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

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
