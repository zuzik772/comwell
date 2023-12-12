import React, { FC } from "react";
import { Menu } from "./Menu";
import { SelectTimeButton } from "../SelectTimeButton";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { generateTimes } from "@/utils/generateTimes";

export const EndTimeMenu: FC = () => {
  const availableTimes = generateTimes();
  const times = useHotelSearchStore((state) => state.times);
  const setTimes = useHotelSearchStore((state) => state.setTimes);

  return (
    <Menu title="Choose your end time" name="endTime">
      {availableTimes.map((time, index) => (
        <SelectTimeButton
          onClick={() => {
            setTimes({
              startTime: times.startTime,
              endTime: time,
            });
          }}
          key={index}
          time={time}
        />
      ))}
    </Menu>
  );
};
