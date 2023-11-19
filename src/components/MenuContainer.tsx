import { FC } from "react";
import { HotelMenu } from "./Menus/HotelMenu";
import { BackgroundDim } from "./BackgroundDim";
import { RoomsMenu } from "./Menus/RoomsMenu";
import { DatePickerMenu } from "./Menus/DatePickerMenu";
import { SearchMenu } from "./Menus/SearchMenu";

export const MenuContainer: FC = () => {
  return (
    <>
      <HotelMenu />
      <RoomsMenu />
      <DatePickerMenu />

      <SearchMenu />

      <BackgroundDim />
    </>
  );
};
