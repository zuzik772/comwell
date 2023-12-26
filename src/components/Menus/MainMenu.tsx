import { FC, useState, useEffect } from "react";

import { BackgroundDim } from "../BackgroundDim";
import { useMenuControllerStore } from "@/stores/menuControllerStore";

export const MainMenu: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const addOpenMenu = useMenuControllerStore((state) => state.addOpenMenu);
  const removeOpenMenu = useMenuControllerStore(
    (state) => state.removeOpenMenu
  );

  return (
    <>
      <div
        className={`bg-white fixed right-32 top-28 flex flex-col rounded-xl w-72 duration-200 z-50 p-4 ${
          !openMenus.includes("mainMenu") && "opacity-0 pointer-events-none"
        }`}
      >
        Main Menu Placeholder
      </div>
      <BackgroundDim menu="mainMenu" className="z-40" />
    </>
  );
};
