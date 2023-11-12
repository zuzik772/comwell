import Link from "next/link";
import { ReactNode } from "react";

type FooterListItemProps = {
  children: ReactNode;
  customClass?: string;
  handleHover: (children: ReactNode | null) => void;
};

export const FooterListItem = ({
  children,
  customClass,
  handleHover,
}: FooterListItemProps) => {
  return (
    <li
      onMouseEnter={() => {
        handleHover(children);
      }}
      onMouseLeave={() => {
        handleHover(null);
      }}
      className={`font-semibold leading-10 text-left ${customClass}`}
    >
      {children}
    </li>
  );
};
