import { FC, ReactNode } from "react";

type FooterLinksProps = {
  children: ReactNode;
  className?: string;
};

export const FooterLinks: FC<FooterLinksProps> = ({ children, className }) => {
  return (
    <li className={`font-semibold text-left text-sm leading-6 ${className}`}>
      <a href="#">{children}</a>
    </li>
  );
};
