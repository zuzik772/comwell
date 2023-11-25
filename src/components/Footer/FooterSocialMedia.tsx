import React from "react";
import { IconType } from "react-icons";

type FooterHeadingsProps = {
  title: string;
  icon: any;
  className?: string;
};

export const FooterSocialMedia = ({
  title,
  icon,
  className,
}: FooterHeadingsProps) => {
  return (
    <a
      className="flex justify-center items-center text-xs leading-3 font-medium"
      target="_blank"
      href="https://www.facebook.com"
    >
      {icon && React.cloneElement(icon, { className })}
      {title}
    </a>
  );
};
