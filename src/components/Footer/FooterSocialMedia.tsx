import React, { FC, ReactElement } from "react";
import { IconType } from "react-icons";

type FooterHeadingsProps = {
  title: string;
  link: string;
  icon: ReactElement<IconType>;
  className?: string;
};

export const FooterSocialMedia: FC<FooterHeadingsProps> = ({
  title,
  link,
  icon,
  className,
}) => {
  return (
    <a
      className={`flex justify-center items-center text-xs font-medium gap-1 ${className}`}
      target="_blank"
      href={link}
    >
      {icon}
      {title}
    </a>
  );
};
