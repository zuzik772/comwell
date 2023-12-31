import { ChangeEvent, FC, useState } from "react";

type InputProps = {
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>(value || "");

  return (
    <div
      className="border border-gray-300 rounded-lg p-2 w-full font-semibold"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="mt-2">
        <label
          className={`absolute pointer-events-none duration-150 ${
            (isFocused || inputValue) && "text-gray-400 -mt-4 text-sm"
          }`}
        >
          {placeholder}
        </label>
        <input
          type={type}
          value={inputValue}
          className="outline-none mt-2 w-full"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(event);
            setInputValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
