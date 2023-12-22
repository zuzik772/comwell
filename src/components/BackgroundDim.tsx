import { useHeaderControllerStore } from "@/stores/headerControllerStore";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { useSearchMenuControllerStore } from "@/stores/searchMenuControllerStore";
import { FC } from "react";

type BackgroundDimProps = {
  menu: MenuNames;
  style?: React.CSSProperties;
  className?: string;
};

export const BackgroundDim: FC<BackgroundDimProps> = ({
  menu,
  style,
  className,
}) => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const setOpenMenus = useMenuControllerStore((state) => state.setOpenMenus);
  const removeOpenMenu = useMenuControllerStore(
    (state) => state.removeOpenMenu
  );

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
      className={`fixed top-0 left-0 w-full h-full bg-black duration-200 ${className} ${
        openMenus.includes(menu)
          ? "opacity-50"
          : "opacity-0 pointer-events-none"
      }`}
      style={style}
      onClick={() => {
        // Clicking the background closes the bound menu
        removeOpenMenu(menu);

        // Due to the update cycle not being instant we are listening for if there is one menu left open
        // (which in our case due to the delay for the update cycle means 0 menus are open)
        if (openMenus.length === 1) {
          setOpenMenus([]);
          setForceNavbarVisible(false);
          setSelectedRoom(null);
          setSelectedSubMenu("selection");
        }
      }}
    />
  );
};
