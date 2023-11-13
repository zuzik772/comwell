import { FC, ReactNode } from "react";

type PillProps = {
  selected?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const Pill: FC<PillProps> = ({ selected, onClick, children }) => {
  return (
    <button
      className={`${
        selected ? "bg-primary text-white" : ""
      } text-xs font-semibold px-4 h-6 rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
