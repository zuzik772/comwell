import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { FC } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RoundedInput } from "./RoundedInput";
import { RoomSearchParameters } from "@/types/HotelSearchParameters";
type RoomMenuRowProps = {
  room: RoomSearchParameters;
  type: "adults" | "kids" | "infants";
  title: string;
  description: string;
  index: number;
};

export const RoomMenuRow: FC<RoomMenuRowProps> = ({
  room,
  type,
  title,
  description,
  index,
}) => {
  const rooms = useHotelSearchStore((state) => state.rooms);
  const setRooms = useHotelSearchStore((state) => state.setRooms);
  // Resolves entering a number and clicking the plus and minus buttons next to it
  const handleRoomInput = (settings: {
    method: "plus" | "minus" | "set";
    value?: number;
    index: number;
  }) => {
    const newRooms = [...rooms];

    // Add, subtract or set the value depending on the method
    if (settings.method === "plus") newRooms[settings.index][type]++;
    else if (settings.method === "minus") newRooms[settings.index][type]--;
    else newRooms[settings.index][type] = settings.value || 0;

    // Clamp values between 0 and 9
    // if (newRooms[settings.index][type] > 9) newRooms[settings.index][type] = 9;
    // if (newRooms[settings.index][type] < 0) newRooms[settings.index][type] = 0;
    setRooms(newRooms);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p>{description || ""}</p>
      </div>
      <div className="flex gap-2">
        <div
          className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit"
          onClick={() =>
            handleRoomInput({
              method: "minus",
              index,
            })
          }
        >
          <BiMinus className="text-xl" />
        </div>
        <RoundedInput
          value={room[type]}
          max={9}
          onChange={(value) =>
            handleRoomInput({
              method: "set",
              value,
              index,
            })
          }
        />
        <div
          className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit"
          onClick={() =>
            handleRoomInput({
              method: "plus",
              index,
            })
          }
        >
          <BiPlus className="text-xl" />
        </div>
      </div>
    </div>
  );
};
