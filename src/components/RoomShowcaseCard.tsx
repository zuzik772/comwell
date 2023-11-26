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
      className="flex h-56 rounded-lg border border-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <section className="w-1/2 h-full">
        <img
          className="w-full h-full object-cover object-center"
          src={room.pictures[0]}
          alt={room.name}
        />
      </section>
      <section className="w-1/3 h-full flex flex-col p-4 relative gap-2">
        <p className="text-2xl font-semibold">{room.name}</p>
        <p className="text-sm overflow-hidden line-clamp-2 ">
          {room.description}
        </p>
        <AmenitiesList room={room} />
        <h2 className="absolute bottom-0">PRICE</h2>
      </section>
    </div>
  );
};
