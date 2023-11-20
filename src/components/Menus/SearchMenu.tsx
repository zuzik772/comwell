import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Room } from "@/types/Room";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { LoadingSpinner } from "../LoadingSpinner";
import { RoomShowcaseCard } from "../RoomShowcaseCard";
import { AmenitiesList } from "../AmenitiesList";
import { Button } from "../Button";
import { BiArrowBack } from "react-icons/bi";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";

export const SearchMenu: FC = () => {
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

  const openMenus = useMenuControllerStore((state) => state.openMenus);

  const selectedRoom = useSearchMenuControllerStore(
    (state) => state.searchMenuSelectedRoom
  );
  const setSelectedRoom = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSelectedRoom
  );

  const selectedSubMenu = useSearchMenuControllerStore(
    (state) => state.searchMenuSubMenu
  );
  const setSelectedSubMenu = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSubMenu
  );

  useEffect(() => {
    if (!openMenus.includes("search")) return setAvailableRooms([]);
    // fetch("/api/availableRooms")
    //   .then((res) => res.json())
    //   .then((data) => setAvailableRooms(data));

    setTimeout(() => {
      setAvailableRooms([
        {
          name: "Room 1",
          description: "Room 1 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 2,
            double: 1,
          },
          amenities: ["TV", "WIFI", "HAIRDRYER"],
        },
        {
          name: "Room 2",
          description: "Room 2 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 3,
            double: 0,
          },
          amenities: ["TV", "WIFI", "WORKSPACE"],
        },
        {
          name: "Room 3",
          description: "Room 3 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 0,
            double: 1,
          },
          amenities: ["TV", "WIFI", "IRON"],
        },
        {
          name: "Room 4",
          description: "Room 4 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 1,
            double: 1,
          },
          amenities: ["TV", "WIFI", "ROOMSERVICE"],
        },
        {
          name: "Room 5",
          description: "Room 5 description",
          pictures: [
            "https://picsum.photos/1000",
            "https://picsum.photos/1001",
            "https://picsum.photos/1002",
          ],
          beds: {
            single: 1,
            double: 0,
          },
          amenities: ["TV", "WIFI"],
        },
      ]);
    }, 2000);
  }, [openMenus]);

  return (
    <Menu title="Choose room" name="search" large>
      {selectedSubMenu === "selection" ? (
        <>
          {availableRooms.length ? (
            availableRooms.map((room) => (
              <RoomShowcaseCard
                room={room}
                key={room.name}
                onClick={() => {
                  setSelectedRoom(room);
                  setSelectedSubMenu("roomInfo");
                }}
              />
            ))
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner />
            </div>
          )}
        </>
      ) : selectedSubMenu === "roomInfo" ? (
        <>
          <div
            className="cursor-pointer bg-secondary rounded-full p-1.5 w-max"
            onClick={() => {
              setSelectedRoom(null);
              setSelectedSubMenu("selection");
            }}
          >
            <BiArrowBack className="text-xl" />
          </div>
          <div className="flex flex-col gap-12">
            <section className="flex w-full h-64s items-center gap-4 overflow-auto">
              {selectedRoom?.pictures.map((picture) => (
                <img
                  src={picture}
                  className="aspect-video h-64 object-cover object-center rounded-xl"
                  alt={selectedRoom.name}
                />
              ))}
            </section>
            <div className="flex px-12 py-2">
              <section className="w-1/2">
                <h2>{selectedRoom?.name}</h2>
              </section>
              <section className="w-1/2 flex flex-col gap-8">
                {selectedRoom && <AmenitiesList room={selectedRoom} />}
                {selectedRoom?.description}
              </section>
            </div>
            <section className="absolute bottom-0 left-0 w-full h-24 border-t border-gray-300 flex justify-between items-center px-4">
              <p>Overnight stay</p>
              <div className="flex gap-8 items-center">
                <h2>PRICE</h2>
                <Button>Select</Button>
              </div>
            </section>
          </div>
        </>
      ) : selectedSubMenu === "booking" ? (
        <></>
      ) : selectedSubMenu === "bookingSuccess" ? (
        <></>
      ) : null}
    </Menu>
  );
};
