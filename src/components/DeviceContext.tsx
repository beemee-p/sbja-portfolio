"use client";
import { createContext, useContext, useEffect, useState } from "react";

export enum DEVICE_TYPE {
  NONE = "",
  MOBILE = "Mobile",
  TABLET = "Tablet",
  PC = "PC",
}

interface DeviceContext {
  deviceType: DEVICE_TYPE;
}

const DeviceContext = createContext<DeviceContext | undefined>(undefined);

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE.NONE);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 600) {
      setDeviceType(DEVICE_TYPE.MOBILE);
    } else if (windowWidth <= 1024) {
      setDeviceType(DEVICE_TYPE.TABLET);
    } else {
      setDeviceType(DEVICE_TYPE.PC);
    }
  }, [windowWidth]);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDeviceContext = () => {
  const device = useContext(DeviceContext)?.deviceType;

  const isMobile = device === DEVICE_TYPE.MOBILE;
  const isTablet = device === DEVICE_TYPE.TABLET;
  const isPC = device === DEVICE_TYPE.PC;
  return { isMobile, isTablet, isPC };
};
