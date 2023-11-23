import { useHeaderControllerStore } from "@/stores/headerControllerStore";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { FC } from "react";

export const BackgroundDim: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const setOpenMenus = useMenuControllerStore((state) => state.setOpenMenus);

  const setForceNavbarVisible = useHeaderControllerStore(
    (state) => state.setForceNavbarVisible
  );

  const setSelectedRoom = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSelectedRoom
  );

  const setSelectedSubMenu = useSearchMenuControllerStore(
    (state) => state.setSearchMenuSubMenu
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 duration-200 ${
        openMenus.length ? "opacity-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => {
        // Clicking the background closes all menus and resets all room related values
        setOpenMenus([]);
        setForceNavbarVisible(false);
        setSelectedRoom(null);
        setSelectedSubMenu("selection");
      }}
    />
  );
};
