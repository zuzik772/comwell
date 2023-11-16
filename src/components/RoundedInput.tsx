import { ChangeEvent, FC, useState } from "react";

type RoundedInputProps = {
  value?: number;
  onChange?: (value: number) => void;
};

export const RoundedInput: FC<RoundedInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      max={9}
      min={0}
      value={value}
      className="rounded-full w-8 h-8 text-center outline-none border border-gray-300 font-semibold"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(parseInt(event.target.value))
      }
    />
  );
};
