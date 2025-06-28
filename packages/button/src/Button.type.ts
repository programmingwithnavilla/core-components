export type ButtonProps = {
  id?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  formId?: string;
  formMethod?: "get" | "post";
  popoverTarget?: string;
  popoverTargetAction?: "hide" | "show" | "toggle";
  disabled?: boolean;
  value?: string;
  autoFocus?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
  ariaPressed?: "true" | "false" | "mixed";
  // isLoading?: boolean;
  // icon?: any;
};
