"use client";

import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import styles from "@/styles/css/common/Button.module.css";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  className: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
