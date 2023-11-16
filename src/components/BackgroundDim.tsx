import { useHeaderControllerStore } from "@/stores/headerController";
import { useMenuControllerStore } from "@/stores/menuControllerStore";
import { FC } from "react";

export const BackgroundDim: FC = () => {
  const openMenus = useMenuControllerStore((state) => state.openMenus);
  const setOpenMenus = useMenuControllerStore((state) => state.setOpenMenus);

  const setForceNavbarVisible = useHeaderControllerStore(
    (state) => state.setForceNavbarVisible
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 duration-200 ${
        openMenus.length ? "opacity-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => {
        setOpenMenus([]);
        setForceNavbarVisible(false);
      }}
    />
  );
};
