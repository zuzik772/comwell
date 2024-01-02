import { FC } from "react";
import { RoundedInput } from "../RoundedInput";
import { Menu } from "./Menu";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { BiMinus, BiPlus } from "react-icons/bi";

export const ParticipantsMenu: FC = () => {
  const participants = useHotelSearchStore((state) => state.participants);
  const setParticipants = useHotelSearchStore(
    (state) => state.setParticipants
  ) as (value: number) => void;

  const handleParticipantsInput = (settings: {
    method: "plus" | "minus" | "set";
    value?: number;
  }) => {
    if (settings.method === "plus") {
      setParticipants(Math.min(participants + 1, 600)); //.min retruns the smaller of 2 values
    } else if (settings.method === "minus") {
      setParticipants(Math.max(participants - 1, 0)); //.max returns the greater of 2 values
    } else if (settings.method === "set" && settings.value !== undefined) {
      const clampedValue = Math.min(Math.max(settings.value, 0), 600);
      setParticipants(clampedValue);
    }
  };

  return (
    <Menu title={"Amount of participants"} name={"participants"}>
      <div className="flex gap-2">
        <div
          className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit"
          onClick={() =>
            handleParticipantsInput({
              method: "minus",
            })
          }
        >
          <BiMinus className="text-xl" />
        </div>
        <RoundedInput
          value={participants}
          onChange={(value) =>
            handleParticipantsInput({
              method: "set",
              value,
            })
          }
        />
        <div
          className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit"
          onClick={() =>
            handleParticipantsInput({
              method: "plus",
            })
          }
        >
          <BiPlus className="text-xl" />
        </div>
      </div>
    </Menu>
  );
};
