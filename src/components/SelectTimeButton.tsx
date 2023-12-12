import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import React, { FC, MouseEventHandler, ReactNode } from "react";

type SelectTimeButtonProps = {
  time: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SelectTimeButton: FC<SelectTimeButtonProps> = ({
  time,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex body-large font-semibold justify-between py-3 first:pt-0 border-b w-full last:border-b-0"
    >
      <span>{time}</span>
    </button>
  );
};
