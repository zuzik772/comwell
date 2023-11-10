import { FC, ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        className="bg-primary text-white py-4 px-20 rounded-full font-semibold hover:brightness-110 duration-200"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
