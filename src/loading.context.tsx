import React, { ReactNode, createContext, useContext, useState } from 'react';

interface LoadingContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value: LoadingContextProps = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export { LoadingProvider, useLoading };
