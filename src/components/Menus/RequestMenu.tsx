import React, { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { MeetingRoom } from "@/types/MeetingRoom";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { MeetingRoomsShowcaseCard } from "../MeetingRoomShowcaseCard";
import { LoadingSpinner } from "../LoadingSpinner";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { BiArrowBack } from "react-icons/bi";

export const RequestMenu: FC = () => {
  const [availableMeetingRooms, setAvailableMeetingRooms] = useState<
    MeetingRoom[]
  >([]);
  const openMenus = useMenuControllerStore((state) => state.openMenus);

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
    const searchUrl = new URL(`http://localhost:3000/meeting-rooms`);
    console.log(searchUrl);
    fetch(searchUrl.href)
      .then((res) => res.json())
      .then((data) => setAvailableMeetingRooms(data));
  }, [openMenus]);

  return (
    <Menu title="Our recommendation" name="request" large>
      {selectedSubMenu === "selection" ? (
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
      ) : selectedSubMenu === "meetingRoomInfo" ? (
        // roomInfo: General information about the selected room
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedMeetingRoom(null);
              setSelectedSubMenu("selection");
            }}
          >
            <BiArrowBack />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/m%C3%B8der_konferencer/comwell_moede-og-konference41.jpg/636f34e0fcca9da5c8a8dde859a5bf2f.webp"
              alt="meeting room"
            />
            <div className="flex px-12 py-2">
              <section className="w-1/2">
                <p>
                  Meeting room capacity:{" "}
                  <i>{selectedMeetingRoom?.maxCapacity} people</i>
                </p>
              </section>
              <section className="w-1/2 flex flex-col gap-8">
                <p>{selectedMeetingRoom?.description}</p>

                <ul className="flex w-full h-64s items-center gap-4 overflow-auto">
                  {selectedMeetingRoom?.bulletPoints.map((bulletPoint) => (
                    <li>{bulletPoint}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </>
      ) : (
        <p>TEST</p>
      )}
    </Menu>
  );
};
