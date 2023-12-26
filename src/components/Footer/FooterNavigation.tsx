import { FC, ReactNode } from "react";

type FooterNavigationProps = {
  children: ReactNode;
  className?: string;
  handleHover: (children: ReactNode | null) => void;
};

export const FooterNavigation: FC<FooterNavigationProps> = ({
  children,
  className,
  handleHover,
}) => {
  return (
    <li
      onMouseEnter={() => {
        handleHover(children);
      }}
      onMouseLeave={() => {
        handleHover(null);
      }}
      className={`font-semibold leading-10 text-left text-3xl cursor-pointer ${className}`}
    >
      <a href="#">{children}</a>
    </li>
  );
};
