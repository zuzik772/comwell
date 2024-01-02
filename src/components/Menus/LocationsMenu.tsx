import { FC } from "react";

import { BackgroundDim } from "../BackgroundDim";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const LocationsMenu: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);

  return (
    <>
      <div
        className={`bg-white fixed right-32 top-28 flex flex-col rounded-xl w-72 duration-200 z-50 p-4 ${
          !openMenus.includes("locations") && "opacity-0 pointer-events-none"
        }`}
      >
        Locations Menu Placeholder
      </div>
      <BackgroundDim menu="locations" className="z-40" />
    </>
  );
};
