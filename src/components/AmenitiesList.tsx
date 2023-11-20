import { Room } from "@/types/Room";
import { FC } from "react";
import { BiTv, BiDesktop, BiWifi, BiBed } from "react-icons/bi";
import { MdPerson, MdIron } from "react-icons/md";
import { PiFanBold } from "react-icons/pi";

export const AmenitiesList: FC<{ room: Room }> = ({ room }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {room.beds.double ? (
        <div className="flex items-center gap-2">
          <BiBed className="inline-block" />
          Double bed
        </div>
      ) : null}
      {room.amenities.map((amenity) => (
        <div className="flex items-center gap-2">
          {amenity === "TV" ? (
            <>
              <BiTv className="inline-block" />
              TV
            </>
          ) : amenity === "HAIRDRYER" ? (
            <>
              <PiFanBold className="inline-block" />
              Hair dryer
            </>
          ) : amenity === "WORKSPACE" ? (
            <>
              <BiDesktop className="inline-block" />
              Workspace
            </>
          ) : amenity === "ROOMSERVICE" ? (
            <>
              <MdPerson className="inline-block" />
              Room service
            </>
          ) : amenity === "IRON" ? (
            <>
              <MdIron className="inline-block" />
              Iron & ironing board
            </>
          ) : amenity === "WIFI" ? (
            <>
              <BiWifi className="inline-block" />
              Free WiFi
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};
