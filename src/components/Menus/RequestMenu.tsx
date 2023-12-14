import React, { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { MeetingRoom } from "@/types/MeetingRoom";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { MeetingRoomsShowcaseCard } from "../MeetingRoomShowcaseCard";
import { LoadingSpinner } from "../LoadingSpinner";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";

export const RequestMenu: FC = () => {
  const [availableMeetingRooms, setAvailableMeetingRooms] = useState<
    MeetingRoom[]
  >([]);
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const selectedHotel = useHotelSearchStore((state) => state.hotel);

  const selectedMeetingRoom = useSearchMenuControllerStore(
    (state) => state.searchMenuSelectedMeetingRoom
  );
  const setSelectedMeetingRoom = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSelectedMeetingRoom
  );

  const selectedSubMenu = useSearchMenuControllerStore(
    (state) => state.searchMenuSubMenu
  );
  const setSelectedSubMenu = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSubMenu
  );
  useEffect(() => {
    if (!openMenus.includes("request")) return setAvailableMeetingRooms([]);
    const searchUrl = new URL(`http://localhost:3000/hotels/${selectedHotel}`);

    fetch(searchUrl.href)
      .then((res) => res.json())
      .then((data) => setAvailableMeetingRooms(data));
  }, [openMenus]);

  return (
    // <Menu title={"Our recommendation"} name={"request"}>
    //   <section className="flex flex-col gap-16">
    //     {selectedSubMenu === "selection" && (
    //       <>
    //         {/* If room search has completed (has rooms) */}
    //         {availableMeetingRooms.length ? (
    //           availableMeetingRooms.map((meetingRoom) => (
    //             <MeetingRoomsShowcaseCard
    //               meetingRoom={meetingRoom}
    //               key={meetingRoom.description}
    //               onClick={() => {
    //                 // setSelectedMeetingRoom(meetingRoom);
    //                 setSelectedSubMenu("meetingRoomInfo");
    //               }}
    //             />
    //           ))
    //         ) : (
    //           // If room search has not completed, show loading spinner
    //           <div className="w-full h-full flex justify-center items-center">
    //             <LoadingSpinner />
    //           </div>
    //         )}
    //       </>
    //     )}
    //   </section>
    // </Menu>
    <Menu title="Our recommendation" name="request" large>
      {selectedSubMenu === "selection" ? (
        // selection: Room picker

        <>
          {/* If room search has completed (has rooms) */}
          {availableMeetingRooms.length ? (
            availableMeetingRooms.map((meetingRoom) => (
              <MeetingRoomsShowcaseCard
                meetingRoom={meetingRoom}
                key={meetingRoom.description}
                onClick={() => {
                  setSelectedMeetingRoom(meetingRoom);
                  setSelectedSubMenu("meetingRoomInfo");
                }}
              />
            ))
          ) : (
            // If room search has not completed, show loading spinner
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner />
            </div>
          )}
        </>
      ) : selectedSubMenu === "roomInfo" ? (
        // roomInfo: General information about the selected room
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedMeetingRoom(null);
              setSelectedSubMenu("selection");
            }}
          ></div>
          <div className="flex flex-col gap-12">
            <div className="flex px-12 py-2">
              <section className="w-1/2">
                <h2>{selectedMeetingRoom?.maxCapacity}</h2>
              </section>
              <section className="w-1/2 flex flex-col gap-8">
                <p>{selectedMeetingRoom?.description}</p>
                <p>{selectedMeetingRoom?.maxCapacity}</p>
              </section>
              <ul className="flex w-full h-64s items-center gap-4 overflow-auto">
                {selectedMeetingRoom?.bulletPoints.map((bulletPoint) => (
                  <li>{bulletPoint}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </Menu>
  );
};
