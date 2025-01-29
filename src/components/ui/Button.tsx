import Link from "next/link";
import React from "react";
import { ButtonType } from "@/types/ui";
const BUTTON_VARIANTS = {
  primary:
    "ml-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  success:
    "ml-1 bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  danger:
    "ml-1 bg-red-600 hover:bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  dark: "ml-1 bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
};

const BUTTON_SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

function Button({
  variant = "primary",
  size = "md",
  onClick,
  children,
  isHidden = false,
  isLink = false,
  buttonType = "button",
  className: additionalClassName = "",
  disabled,
  href = "",
  ...props
}: ButtonType) {
  if (isHidden) return null;

  const baseClassName =
    "inline-flex items-center justify-center font-medium rounded-lg focus:ring-4 focus:outline-none text-white transition-colors";
  const variantClassName = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary;
  const sizeClassName = BUTTON_SIZES[size] || BUTTON_SIZES.md;

  const className =
    `${baseClassName} ${variantClassName} ${sizeClassName} ${additionalClassName}`.trim();

  if (isLink) {
    return (
      <Link {...props} href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={buttonType}
    >
      {children}
    </button>
  );
}

export default Button;
