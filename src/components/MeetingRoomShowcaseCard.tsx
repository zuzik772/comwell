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
      <div className="flex gap-4 px-12 py-2 ">
        <section className="w-1/2">
          <img
            src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/m%C3%B8der_konferencer/comwell_moede-og-konference41.jpg/636f34e0fcca9da5c8a8dde859a5bf2f.webp"
            alt="meeting room"
          />
        </section>
        <section className="w-1/2 flex flex-col gap-2">
          <p>{meetingRoom?.description}</p>
          <p>
            Meeting room capacity: <i>{meetingRoom?.maxCapacity} people</i>
          </p>
          <ul className="flex flex-col pl-8">
            {meetingRoom?.bulletPoints.map((bulletPoint) => (
              <li className="list-disc">{bulletPoint}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
