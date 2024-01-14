"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDeviceContext } from "@/components/DeviceContext";

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
  const { isMobile, isTablet, isPC } = useDeviceContext();
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    if (isPC) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  }, [isPC, isMobile, isTablet]);

  return (
    <PortfolioContext.Provider value={{ showInfo, setShowInfo }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => useContext(PortfolioContext);
