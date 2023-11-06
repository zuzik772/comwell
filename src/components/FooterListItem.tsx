import Link from "next/link";
import { ReactNode } from "react";

type FooterListItemProps = {
  children: ReactNode;
  customClass?: string;
};

export const FooterListItem = ({
  children,
  customClass,
}: FooterListItemProps) => {
  return (
    <li className={`font-semibold leading-10 text-left ${customClass}`}>
      {children}
    </li>
  );
};
