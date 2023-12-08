import React, { FC } from "react";
import { Menu } from "./Menu";
import { SelectTimeButton } from "../SelectTimeButton";

type TimeMenuProps = {
  title: string;
  name: MenuNames;
};

const TimeMenu: FC<TimeMenuProps> = ({ title, name }) => {
  // Function to generate an array of times with 30-minute intervals
  const generateTimes = () => {
    const times = [];
    let currentHour = 8;
    let currentMinute = 30;

    while (!(currentHour === 23 && currentMinute === 0)) {
      const formattedTime = `${currentHour
        .toString()
        .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      times.push(formattedTime);

      // Increment by 30 minutes
      currentMinute += 30;
      if (currentMinute === 60) {
        currentMinute = 0;
        currentHour += 1;
      }
    }

    return times;
  };

  // Generate an array of times
  const times = generateTimes();

  return (
    <Menu title={title} name={name}>
      {times.map((time, index) => (
        <SelectTimeButton key={index} time={time} />
      ))}
    </Menu>
  );
};

export const StartTimeMenu: FC = () => {
  return <TimeMenu title="Choose start time" name="start-time" />;
};

export const EndTimeMenu: FC = () => {
  return <TimeMenu title="Choose end time" name="end-time" />;
};
