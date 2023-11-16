import { FC } from "react";
import { Menu } from "./Menu";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RoundedInput } from "../RoundedInput";
import { RoomMenuRow } from "../RoomMenuRow";

export const RoomsMenu: FC = () => {
  const rooms = useHotelSearchStore((state) => state.rooms);
  const addRoom = useHotelSearchStore((state) => state.addRoom);
  const removeRoom = useHotelSearchStore((state) => state.removeRoom);

  return (
    <Menu title="Guests & Rooms" name="rooms">
      {rooms.map((room, index) => (
        <div key={index}>
          <section className="flex justify-between items-center">
            <p className="font-semibold">Room {index + 1}</p>
            <p
              className={`underline cursor-pointer ${index === 0 && "hidden"}`}
              onClick={() => removeRoom(index)}
            >
              Remove
            </p>
          </section>
          <section className="flex flex-col gap-4 border-b py-4">
            <RoomMenuRow
              room={room}
              type="adults"
              title="Adults"
              description="12+ years"
              index={index}
              key={index}
            />
            <RoomMenuRow
              room={room}
              type="kids"
              title="Kids"
              description="3-11 years"
              index={index}
              key={index}
            />
            <RoomMenuRow
              room={room}
              type="infants"
              title="Infants"
              description="0-2 years"
              index={index}
              key={index}
            />
          </section>
        </div>
      ))}

      <section className="flex justify-center item">
        <div
          className="flex gap-2 justify-center items-center cursor-pointer"
          onClick={addRoom}
        >
          <div className="cursor-pointer bg-secondary rounded-full p-1.5 h-fit">
            <BiPlus className="text-xl" />
          </div>
          <p>Choose room</p>
        </div>
      </section>
    </Menu>
  );
};
