"use client";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
