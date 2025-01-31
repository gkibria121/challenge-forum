import React from "react";

export type ButtonVariantType = "primary" | "success" | "danger" | "dark";
export type ButtonSizeType = "sm" | "md" | "lg" | "xl";
export type ButtonActionType = "button" | "submit" | "reset";

export type ButtonType = {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  isHidden?: boolean;
  isLink?: boolean;
  buttonType?: ButtonActionType;
  className?: string;
  disabled?: boolean;
  href?: string;
};

export type PropsWtihClassName = {
  className: string | undefined;
};

export type onClickEventHandler = React.MouseEventHandler<HTMLElement>;
