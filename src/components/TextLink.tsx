import { FC } from "react";

type TextLinkProps = {
  onClick: () => void;
  children: string;
};

export const TextLink: FC<TextLinkProps> = ({ onClick, children }) => {
  return (
    <p
      onClick={onClick}
      className="text-primary underline cursor-pointer inline"
    >
      {children}
    </p>
  );
};
