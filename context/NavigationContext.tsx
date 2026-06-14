'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from 'react';

type NavigationContextProviderType = {
  children: React.ReactNode;
};

type NavigationContextType = {
  activeHash: string;
  setActiveHash: React.Dispatch<React.SetStateAction<string>>;
  lastClickedRef: React.RefObject<number>;
  setLastClicked: (value: number) => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

export default function NavigationContextProvider({
  children
}: NavigationContextProviderType) {
  const [activeHash, setActiveHash] = useState<string>('About');
  const lastClickedRef = useRef<number>(0);

  const setLastClicked = useCallback((value: number) => {
    lastClickedRef.current = value;
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        activeHash,
        setActiveHash,
        lastClickedRef,
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
