import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-[11px] sm:text-xs";

  const sizeStyles = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const variantStyles = {
    primary:
      "border border-accent text-accent hover:bg-accent hover:text-bg bg-transparent",
    dark: "bg-text text-bg hover:bg-accent hover:text-bg border border-text hover:border-accent",
    light:
      "bg-surface text-text hover:bg-accent hover:text-bg border border-surface hover:border-accent",
    outline:
      "border border-border text-text hover:border-accent hover:text-accent bg-transparent",
    ghost: "text-text-muted hover:text-accent bg-transparent",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
