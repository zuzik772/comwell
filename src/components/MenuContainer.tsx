import { FC } from "react";
import { HotelMenu } from "./Menus/HotelMenu";
import { RoomsMenu } from "./Menus/RoomsMenu";
import { DatePickerMenu } from "./Menus/DatePickerMenu";
import { SearchMenu } from "./Menus/SearchMenu";
import { RegisterMenu } from "./Menus/RegisterMenu";
import { ParticipantsMenu } from "./Menus/ParticipantsMenu";
import { RequestMenu } from "./Menus/RequestMenu";
import { StartTimeMenu } from "./Menus/StartTimeMenu";
import { EndTimeMenu } from "./Menus/EndTimeMenu";

export const MenuContainer: FC = () => {
  // Contains all the sliding menus that can be opened
  return (
    <>
      <HotelMenu />
      <RoomsMenu />
      <DatePickerMenu />
      <RegisterMenu />
      <SearchMenu />
      <ParticipantsMenu />
      <StartTimeMenu />
      <EndTimeMenu />
      <RequestMenu />
    </>
  );
};
