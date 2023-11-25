import { Room } from "@/types/Room";
import { FC } from "react";
import { AmenitiesList } from "./AmenitiesList";

type RoomShowcaseCardProps = {
  room: Room;
  onClick?: () => void;
};

export const RoomShowcaseCard: FC<RoomShowcaseCardProps> = ({
  room,
  onClick,
}) => {
  return (
    <div
      className="flex min-h-[14rem] h-full rounded-lg border border-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <section className="w-1/2 h-full">
        <img
          className="w-full h-full object-cover object-center"
          src={"get me image"}
          alt={room.name}
        />
      </section>
      <section className="w-1/3 h-full flex flex-col p-4">
        <p className="text-2xl font-semibold">{room.name}</p>
        <p className="text-sm">{room.description}</p>
        <AmenitiesList room={room} />
        <h2 className="h-full flex items-end">PRICE</h2>
      </section>
    </div>
  );
};
