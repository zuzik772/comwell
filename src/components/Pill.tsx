import { FC, ReactNode } from "react";

export const Pill: FC<{
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}> = ({ selected, onClick, className = "", children }) => {
  return (
    <div
      className={`${selected ? "bg-red-500" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
