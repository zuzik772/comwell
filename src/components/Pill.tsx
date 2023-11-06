import { FC, ReactNode } from "react";

type PillProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

export const Pill: FC<PillProps> = ({
  selected,
  onClick,
  className = "",
  children,
}) => {
  return (
    <div
      className={`${selected ? "bg-red-500" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
