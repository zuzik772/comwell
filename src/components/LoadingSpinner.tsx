import { PulseLoader } from "react-spinners";
import colors from "../../tailwind.config";
import { FC } from "react";

export const LoadingSpinner: FC = () => {
  return (
    <PulseLoader
      // Grab the primary color from the tailwind.config.js file
      color={
        (
          colors.theme?.extend?.colors as {
            primary: string;
          }
        ).primary
      }
    />
  );
};
