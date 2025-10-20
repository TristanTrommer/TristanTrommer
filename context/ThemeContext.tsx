'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';

type ThemeContextProviderType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
                                               children
                                             }: ThemeContextProviderType) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;

    if ((localTheme && localTheme === 'dark') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }

  return context;
}