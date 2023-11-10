import { FC, ReactNode } from "react";

type PillProps = {
  selected?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const Pill: FC<PillProps> = ({ selected, onClick, children }) => {
  return (
    <button className={selected ? "bg-red-500" : ""} onClick={onClick}>
      {children}
    </button>
  );
};
