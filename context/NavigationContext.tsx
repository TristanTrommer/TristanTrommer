'use client';

import React, {createContext, useContext, useState} from 'react';

type NavigationContextProviderType = {
  children: React.ReactNode;
};

type NavigationContextType = {
  activeHash: string;
  setActiveHash: React.Dispatch<React.SetStateAction<string>>;
  lastClicked: number;
  setLastClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const NavigationContext = createContext<NavigationContextType | null>(null);

export default function NavigationContextProvider({
                                                    children
                                                  }: NavigationContextProviderType) {
  const [activeHash, setActiveHash] = useState<string>('About');
  const [lastClicked, setLastClicked] = useState<number>(0);

  return (
    <NavigationContext.Provider
      value={{
        activeHash,
        setActiveHash,
        lastClicked,
        setLastClicked
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);

  if (context === null) {
    throw new Error(
      'useNavigationContext must be used within an NavigationContextProvider'
    );
  }

  return context;
}
