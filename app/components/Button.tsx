import type { ButtonHTMLAttributes } from "react";

export default function Button({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md bg-orange-500 px-8 py-3.5 font-medium text-white hover:bg-orange-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}