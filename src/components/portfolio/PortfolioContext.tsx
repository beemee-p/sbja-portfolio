"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface PortfolioContextType {
  showInfo: boolean;
  setShowInfo: Dispatch<SetStateAction<boolean>>;
}

const PortfolioContext = createContext<PortfolioContextType>({
  showInfo: true,
  setShowInfo: () => {},
});

export const PortfolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <PortfolioContext.Provider value={{ showInfo, setShowInfo }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
