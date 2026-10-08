'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on initial load
  useEffect(() => {
    const storedSession = localStorage.getItem('auth_session');
    if (storedSession) {
      try {
        setUser(JSON.parse(storedSession));
      } catch (e) {
        localStorage.removeItem('auth_session');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, pass: string) => {
    await new Promise((res) => setTimeout(res, 1000)); // Simulated API delay

    const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const existingUser = storedUsers.find((u: any) => u.email === email && u.password === pass);

    if (existingUser) {
      const sessionUser = { name: existingUser.name, email: existingUser.email };
      setUser(sessionUser);
      localStorage.setItem('auth_session', JSON.stringify(sessionUser));
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password.' };
  };

  const signup = async (name: string, email: string, pass: string) => {
    await new Promise((res) => setTimeout(res, 1000)); // Simulated API delay

    const storedUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    if (storedUsers.some((u: any) => u.email === email)) {
      return { success: false, error: 'Email is already registered.' };
    }

    const newUser = { name, email, password: pass };
    storedUsers.push(newUser);
    localStorage.setItem('registered_users', JSON.stringify(storedUsers));

    const sessionUser = { name, email };
    setUser(sessionUser);
    localStorage.setItem('auth_session', JSON.stringify(sessionUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_session');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};