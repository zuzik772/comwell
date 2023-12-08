import React, { FC, ReactNode } from "react";

type SelectTimeButtonProps = {
  time: string;
};

export const SelectTimeButton: FC<SelectTimeButtonProps> = ({ time }) => {
  return (
    <button className="flex body-large font-semibold justify-between py-3 first:pt-0 border-b w-full last:border-b-0">
      <span>{time}</span>
    </button>
  );
};
