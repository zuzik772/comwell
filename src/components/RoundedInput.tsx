import { ChangeEvent, FC } from "react";

type RoundedInputProps = {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export const RoundedInput: FC<RoundedInputProps> = ({
  value,
  max,
  onChange,
}) => {
  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    // Parse the input value when the user finishes typing (onBlur)
    onChange && onChange(parseInt(event.target.value));
  };
  return (
    <input
      type="number"
      max={max}
      min={0}
      value={value}
      className="rounded-full w-8 h-8 text-center outline-none border border-gray-300 font-semibold"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange && onChange(parseInt(event.target.value))
      }
      onBlur={handleBlur}
    />
  );
};
