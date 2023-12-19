import { FC, ReactNode, MouseEvent } from "react";

type ButtonProps = {
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  fullWidth,
  disabled,
  children,
}) => {
  return (
    <div className="flex justify-center w-full">
      <button
        className={`bg-primary text-white py-4 px-20 rounded-full font-semibold hover:brightness-110 duration-200 flex justify-center items-center gap-2 ${
          fullWidth && "w-full"
        } ${disabled && "saturate-[0.25] pointer-events-none"}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
