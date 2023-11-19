import { FC, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { AvailableRooms } from "@/types/AvailableRooms";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const SearchMenu: FC = () => {
  const [availableRooms, setAvailableRooms] = useState<AvailableRooms[]>([]);

  const openMenus = useMenuControllerStore((state) => state.openMenus);

  useEffect(() => {
    if (!openMenus.includes("search")) return setAvailableRooms([]);
    // fetch("/api/available-rooms")
    //   .then((res) => res.json())
    //   .then((data) => setAvailableRooms(data));

    setTimeout(() => {
      setAvailableRooms([
        {
          name: "Room 1",
          description: "Room 1 description",
          pictures: [
            "https://picsum.photos/200",
            "https://picsum.photos/201",
            "https://picsum.photos/202",
          ],
          beds: {
            single: 2,
            double: 1,
          },
          amenities: ["TV", "WIFI", "HAIRDRYER"],
        },
        // Write more example rooms with incrementing numbers and random values
        {
          name: "Room 2",
          description: "Room 2 description",
          pictures: ["https://picsum.photos/200"],
          beds: {
            single: 3,
            double: 0,
          },
          amenities: ["TV", "WIFI", "WORKSPACE"],
        },
        {
          name: "Room 3",
          description: "Room 3 description",
          pictures: ["https://picsum.photos/200"],
          beds: {
            single: 0,
            double: 1,
          },
          amenities: ["TV", "WIFI", "IRON"],
        },
        {
          name: "Room 4",
          description: "Room 4 description",
          pictures: ["https://picsum.photos/200"],
          beds: {
            single: 1,
            double: 1,
          },
          amenities: ["TV", "WIFI", "ROOMSERVICE"],
        },
        {
          name: "Room 5",
          description: "Room 5 description",
          pictures: ["https://picsum.photos/200"],
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
      {availableRooms.length ? (
        availableRooms.map((room) => <div>{room.name}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </Menu>
  );
};
