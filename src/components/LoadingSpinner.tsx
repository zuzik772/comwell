import { PulseLoader } from "react-spinners";
import colors from "../../tailwind.config";
import { FC } from "react";

export const LoadingSpinner: FC = () => {
  return (
    <PulseLoader
      color={
        (
          colors.theme?.extend?.colors as {
            footer: string;
            primary: string;
            secondary: string;
          }
        ).primary
      }
    />
  );
};
