import { Room } from "@/types/Room";
import { create } from "zustand";

type SearchMenuSubMenus =
  | "selection"
  | "roomInfo"
  | "booking"
  | "bookingSuccess";

type SearchMenuController = {
  // Handles state of the selected room
  searchMenuSelectedRoom: Room | null;
  setSearchMenuSelectedRoom: (room: Room | null) => void;

  // Handles state of the sub menu
  searchMenuSubMenu: SearchMenuSubMenus;
  setSearchMenuSubMenu: (subMenu: SearchMenuSubMenus) => void;
};

export const useSearchMenuControllerStore = create<SearchMenuController>(
  (set) => ({
    searchMenuSelectedRoom: null,
    setSearchMenuSelectedRoom: (room) =>
      set((state) => ({ ...state, searchMenuSelectedRoom: room })),

    searchMenuSubMenu: "selection",
    setSearchMenuSubMenu: (subMenu) =>
      set((state) => ({ ...state, searchMenuSubMenu: subMenu })),
  })
);
