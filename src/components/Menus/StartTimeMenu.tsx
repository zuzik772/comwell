import React, { FC } from "react";
import { Menu } from "./Menu";
import { SelectTimeButton } from "../SelectTimeButton";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { generateTimes } from "@/utils/generateTimes";

export const StartTimeMenu: FC = () => {
  const availableTimes = generateTimes();
  const times = useHotelSearchStore((state) => state.times);
  const setTimes = useHotelSearchStore((state) => state.setTimes);

  return (
    <Menu title="Choose your start time" name="startTime">
      {availableTimes.map((time, index) => (
        <SelectTimeButton
          onClick={() => {
            setTimes({
              startTime: time,
              endTime: times.endTime,
            });
          }}
          key={index}
          time={time}
        />
      ))}
    </Menu>
  );
};
