import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "glass" | "solid";
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = "solid",
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles = `
    rounded-xl p-6 
    ${variant === "glass" ? "glass" : "bg-space-cadet"}
    ${hover ? "card-hover cursor-pointer" : ""}
    ${className}
  `;

  return <div className={baseStyles}>{children}</div>;
}
