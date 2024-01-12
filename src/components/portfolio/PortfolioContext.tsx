"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDeviceContext } from "../DeviceContext";

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
  const { isTablet } = useDeviceContext();
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    if (!isTablet) {
      return;
    }
    setShowInfo(false);
  }, [isTablet]);

  return (
    <PortfolioContext.Provider value={{ showInfo, setShowInfo }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
