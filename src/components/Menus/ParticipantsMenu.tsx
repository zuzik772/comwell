import { FC } from "react";
import { Menu } from "./Menu";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { RoundedInput } from "../RoundedInput";
import { BiMinus, BiPlus } from "react-icons/bi";

export const ParticipantsMenu: FC = (props) => {
  const participants = useHotelSearchStore((state) => state.participants);
  const setParticipants = useHotelSearchStore((state) => state.setParticipants);
  const handleParticipantsInput = (settings: {
    method: "plus" | "minus" | "set";
    value?: number;
  }) => {
    // Add, subtract or set the value depending on the method
    if (settings.method === "plus" && participants < 599) {
      setParticipants(participants + 1);
    } else if (settings.method === "minus" && participants > 0) {
      setParticipants(participants - 1);
    } else {
      setParticipants(settings.value || 0);
      // Clamp values between 0 and 599
      if (participants >= 599) setParticipants(599);
      if (participants < 0) setParticipants(0);
    }
  };

  return (
    <Menu title="Amount of participants" name="participants">
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
          max={599}
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
              //   index,
            })
          }
        >
          <BiPlus className="text-xl" />
        </div>
      </div>
    </Menu>
  );
};
