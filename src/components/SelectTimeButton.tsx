import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import React, { FC, MouseEventHandler, ReactNode } from "react";
import { BiCheck } from "react-icons/bi";

type SelectTimeButtonProps = {
  time: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SelectTimeButton: FC<SelectTimeButtonProps> = ({
  time,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex body-large font-semibold justify-between py-3 first:pt-0 border-b w-full last:border-b-0"
    >
      <span>{time}</span>

      {isSelected && <BiCheck />}
    </button>
  );
};
