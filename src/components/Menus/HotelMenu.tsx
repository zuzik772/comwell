import { FC, useEffect, useState } from "react";
import { Pill } from "../Pill";
import { Menu } from "./Menu";
import { BiCheck } from "react-icons/bi";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { HotelList } from "@/types/HotelList";

export const HotelMenu: FC = () => {
  const [regionSelected, setRegionSelected] = useState<
    "All" | "Zealand" | "Funen" | "Jutland" //Add Regions here instead of strings
  >("All");

  const selectedHotel = useHotelSearchStore((state) => state.hotel);
  const setSelectedHotel = useHotelSearchStore((state) => state.setHotel);

  const [hotelList, setHotelList] = useState<HotelList[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/hotels", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      setHotelList(result);
    })();
  }, []);

  return (
    <Menu title="Hotels" name="hotels">
      {/* Region picker (all/specific) */}
      <section className="flex gap-4 py-4 border-b">
        <Pill
          selected={regionSelected === "All"}
          onClick={() => setRegionSelected("All")}
        >
          All
        </Pill>

        <Pill
          selected={regionSelected === "Zealand"}
          onClick={() => setRegionSelected("Zealand")}
        >
          Zealand
        </Pill>
        <Pill
          selected={regionSelected === "Funen"}
          onClick={() => setRegionSelected("Funen")}
        >
          Funen
        </Pill>
        <Pill
          selected={regionSelected === "Jutland"}
          onClick={() => setRegionSelected("Jutland")}
        >
          Jutland
        </Pill>
      </section>

      <section className="flex flex-col gap-2">
        {hotelList.map(
          (hotel) =>
            // Only show hotels that match the selected region OR all hotels if "All" is selected
            (regionSelected === "All" || regionSelected === hotel.group) && (
              <div
                className="flex justify-between border border-gray-300 hover:border-gray-500 rounded-sm h-16 cursor-pointer"
                key={hotel.title}
                onClick={() => setSelectedHotel(hotel.title)}
              >
                <section className="relative">
                  <img
                    src={hotel.picture}
                    alt={hotel.title}
                    className="h-full w-20 object-cover absolute"
                  />
                  <div className="ml-20 flex flex-col p-2">
                    <p className="text-lg font-semibold">{hotel.title}</p>
                    <p>{hotel.city}</p>
                  </div>
                </section>

                {/* Selected hotel check */}
                <section className="flex items-center pr-4">
                  <div
                    className={`cursor-pointer bg-primary rounded-full p-1 h-fit ${
                      selectedHotel !== hotel.title && "hidden"
                    }`}
                  >
                    <BiCheck className="text-white text-lg" />
                  </div>
                </section>
              </div>
            )
        )}
      </section>
    </Menu>
  );
};
