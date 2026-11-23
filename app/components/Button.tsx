import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md";
};

const sizes = {
  sm: "px-5 py-1.5 text-xs",
  md: "px-8 py-3.5",
};

export default function Button({
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-orange-500 font-medium text-white hover:bg-orange-600 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}