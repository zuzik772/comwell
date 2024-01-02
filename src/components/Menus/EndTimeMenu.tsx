import React, { FC, useState } from "react";
import { Menu } from "./Menu";
import { SelectTimeButton } from "../SelectTimeButton";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { generateTimes } from "@/utils/generateTimes";

export const EndTimeMenu: FC = () => {
  const availableTimes = generateTimes();
  const times = useHotelSearchStore((state) => state.times);
  const setTimes = useHotelSearchStore((state) => state.setTimes);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <Menu title="Choose your end time" name="endTime">
      {availableTimes.map((time, index) => (
        <SelectTimeButton
          onClick={() => {
            setTimes({
              startTime: times.startTime,
              endTime: time,
            });
            setSelectedTime(time);
          }}
          key={index}
          time={time}
          isSelected={time === selectedTime}
        />
      ))}
    </Menu>
  );
};
