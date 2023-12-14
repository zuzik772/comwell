import { FC } from "react";
import { MeetingRoom } from "@/types/MeetingRoom";

type MeetingRoomsShowcaseCardProps = {
  meetingRoom: MeetingRoom;
  onClick?: () => void;
};

export const MeetingRoomsShowcaseCard: FC<MeetingRoomsShowcaseCardProps> = ({
  meetingRoom,
  onClick,
}) => {
  return (
    <div
      className="flex h-56 rounded-lg border border-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <section className="w-1/3 h-full flex flex-col p-4 relative gap-2">
        {/* <p className="text-2xl font-semibold">{meetingRoom.name}</p> */}
        <p className="text-sm overflow-hidden line-clamp-2 ">
          {meetingRoom.maxCapacity}
        </p>
        <p className="text-sm overflow-hidden line-clamp-2 ">
          {meetingRoom.description}
        </p>
        <p className="text-sm overflow-hidden line-clamp-2 ">
          {meetingRoom.bulletPoints}
        </p>
      </section>
    </div>
  );
};
