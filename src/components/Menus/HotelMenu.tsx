import { FC, useState } from "react";
import { Pill } from "../Pill";
import { Menu } from "./Menu";
import { hotels } from "@/data/hotels";
import { BiCheck } from "react-icons/bi";
import { useHotelSearchStore } from "@/stores/hotelSearchStore";
import { Hotels } from "@/types/HotelSearchParameters";

export const HotelMenu: FC = () => {
  const [regionSelected, setRegionSelected] = useState<
    "All" | "Zealand" | "Funen" | "Jutland"
  >("All");

  const hotel = useHotelSearchStore((state) => state.hotel);
  const setHotel = useHotelSearchStore((state) => state.setHotel);

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
        {Object.entries(hotels).map(
          ([name, info]) =>
            // Only show hotels that match the selected region OR all hotels if "All" is selected
            (regionSelected === "All" || regionSelected === info.group) && (
              <div
                className="flex justify-between border border-gray-300 hover:border-gray-500 rounded-sm h-16 cursor-pointer"
                key={name}
                onClick={() => setHotel(name as Hotels)}
              >
                <section className="relative">
                  <img
                    src={info.picture}
                    alt={name}
                    className="h-full w-20 object-cover absolute"
                  />
                  <div className="ml-20 flex flex-col p-2">
                    <p className="text-lg font-semibold">{name}</p>
                    <p>{info.location}</p>
                  </div>
                </section>

                {/* Selected hotel check */}
                <section className="flex items-center pr-4">
                  <div
                    className={`cursor-pointer bg-primary rounded-full p-1 h-fit ${
                      hotel !== name && "hidden"
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
