import React from "react";
import { ButtonProps } from "./Button.type";

export const Button = ({
  id,
  name,
  className,
  children,
  onClick,
  onBlur,
  autoFocus,
  disabled = false,
  type = "button",
  value,
  popoverTarget,
  popoverTargetAction,
  ariaPressed,
}: ButtonProps) => {
  return (
    <button
      id={id}
      name={name}
      className={className}
      disabled={disabled}
      type={type}
      value={value}
      popoverTarget={popoverTarget}
      popoverTargetAction={popoverTargetAction}
      autoFocus={autoFocus}
      onClick={onClick}
      onBlur={onBlur}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );
};
