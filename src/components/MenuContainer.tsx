import { FC } from "react";
import { HotelMenu } from "./Menus/HotelMenu";
import { BackgroundDim } from "./BackgroundDim";
import { RoomsMenu } from "./Menus/RoomsMenu";
import { DatePickerMenu } from "./Menus/DatePickerMenu";
import { SearchMenu } from "./Menus/SearchMenu";
import { RegisterMenu } from "./Menus/RegisterMenu";

export const MenuContainer: FC = () => {
  // Contains all the sliding menus that can be opened
  return (
    <>
      <HotelMenu />
      <RoomsMenu />
      <DatePickerMenu />
      <RegisterMenu />
      <SearchMenu />

      <BackgroundDim />
    </>
  );
};
