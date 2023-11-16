import { FC, useState } from "react";
import { Pill } from "../Pill";
import { Menu } from "./Menu";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { hotels } from "@/data/hotels";

export const HotelMenu: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);

  const [regionSelected, setRegionSelected] = useState("All");

  return (
    <Menu title="Hotels" name="hotels">
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
        {Object.entries(hotels).map(([name, info]) => (
          <div
            className="flex border border-gray-300 rounded-sm h-16 cursor-pointer"
            key={name}
          >
            <img src={info.picture} alt={name} className="h-full" />
            {/* TODO: Selection and fix styling */}
            <div className="flex flex-col p-2">
              <p className="text-lg font-semibold">{name}</p>
              <p>{info.location}</p>
            </div>
          </div>
        ))}
      </section>
    </Menu>
  );
};
