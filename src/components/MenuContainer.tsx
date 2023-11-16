import { FC } from "react";
import { HotelMenu } from "./Menus/HotelMenu";
import { BackgroundDim } from "./BackgroundDim";
import { RoomsMenu } from "./Menus/RoomsMenu";

export const MenuContainer: FC = () => {
  return (
    <>
      <HotelMenu />
      <RoomsMenu />
      <BackgroundDim />
    </>
  );
};
