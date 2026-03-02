import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  primary: "bg-cobalt hover:bg-tang text-white btn-glow",
  secondary: "border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-white",
  accent: "bg-jade hover:brightness-110 text-white",
  ghost: "text-white hover:bg-white/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg 
    transition-all duration-300 ease-out
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
