import {
  HotelDatesParameters,
  RoomSearchParameters,
} from "@/types/HotelSearchParameters";
import { FC, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type DropdownProps = {
  type?:
    | "text"
    | "hotel"
    | "event"
    | "rooms"
    | "checkIn"
    | "checkOut"
    | "dates"
    | "time";
  title?: string;
  value?:
    | string
    | number
    | RoomSearchParameters[]
    | Date
    | HotelDatesParameters
    | null;
  onClick?: () => void;
  small?: boolean;
};

export const Dropdown: FC<DropdownProps> = ({
  type = "text",
  title,
  value,
  onClick,
  small,
}) => {
  const [dropdownValue, setDropdownValue] = useState<string>("");

  // Set formatted values
  const setDropdownTextValue = (
    value: string | number,
    type: "text" | "hotel" | "event" | "time"
  ) => {
    setDropdownValue(
      (value as string)
        ? (value as string)
        : type === "hotel"
        ? "Choose hotel"
        : type === "event"
        ? "Choose type"
        : type === "time"
        ? "Select time"
        : "Empty"
    );
  };

  const setDropdownRoomValue = (values: RoomSearchParameters[]) => {
    const persons = values.reduce((acc, curr) => {
      return acc + curr.adults + curr.kids + curr.infants;
    }, 0);

    setDropdownValue(
      `${values.length} Room${values.length > 1 ? "s" : ""}, ${persons} Person${
        persons > 1 ? "s" : ""
      }`
    );
  };

  const setDropdownDateValue = (value: Date) => {
    setDropdownValue(
      value.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    );
  };

  const setDropdownDatesValue = (value: HotelDatesParameters) => {
    setDropdownValue(
      `${value.startDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })} - ${value.endDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })}`
    );
  };

  // Default values
  useEffect(() => {
    switch (type) {
      case "text":
      case "hotel":
      case "event":
      case "time":
        setDropdownTextValue(value as string, type);
        break;
      case "rooms":
        setDropdownRoomValue(value as RoomSearchParameters[]);
        break;
      case "checkIn":
      case "checkOut":
        setDropdownDateValue(value as Date);
        break;
      case "dates":
        setDropdownDatesValue(value as HotelDatesParameters);
        break;
    }
  }, [value]);

  return (
    <div
      className={`border border-gray-300 hover:border-gray-500 rounded-lg p-2 cursor-pointer ${
        small ? "w-1/2" : "w-full"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="mt-3">
          <label className="absolute pointer-events-none duration-150 text-xs -mt-3 font-normal">
            {title || "Placeholder Title"}
          </label>
          <span className="font-semibold">{dropdownValue}</span>
        </div>
        <BiChevronDown className="text-2xl" />
      </div>
    </div>
  );
};
