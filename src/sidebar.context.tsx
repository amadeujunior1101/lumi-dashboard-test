import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SidebarContextProps {
  selectedNavItem: string;
  setSelectedNavItem: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('home');

  const value: SidebarContextProps = {
    selectedNavItem,
    setSelectedNavItem,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarProvider = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarProvider must be used within a SidebarProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarProvider, useSidebarProvider };
