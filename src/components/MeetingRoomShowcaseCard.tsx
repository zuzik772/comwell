import { FC } from "react";
import { MeetingRoom } from "@/types/MeetingRoom";
import { BiArrowBack } from "react-icons/bi";

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
      className="flex h-56 rounded-lg border border-gray-300"
      onClick={onClick}
    >
      <div className=" relative flex gap-4 px-12 py-2 ">
        <section className="w-1/2">
          <img src={meetingRoom?.picture} alt={meetingRoom?.description} />
        </section>
        <section className="w-1/2 flex flex-col gap-2">
          <p>{meetingRoom?.description}</p>
          <p>
            Meeting room capacity: <i>{meetingRoom?.maxCapacity} people</i>
          </p>
          <div className="absolute bottom-5 right-5 duration-150 scale-150 cursor-pointer hover:bg-secondary rounded-full p-1.5 w-max rotate-180">
            <BiArrowBack />
          </div>
        </section>
      </div>
    </div>
  );
};
