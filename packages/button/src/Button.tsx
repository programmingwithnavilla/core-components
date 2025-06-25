import React from "react";
import { ButtonProps } from "./Button.type";

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
