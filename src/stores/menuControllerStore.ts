import { useState } from "react";
import { create } from "zustand";

type MenuController = {
  openMenus: MenuNames[];
  setOpenMenus: (values: MenuNames[]) => void;
  addOpenMenu: (values: MenuNames) => void;
  removeOpenMenu: (values: MenuNames) => void;
};

export const useMenuControllerStore = create<MenuController>((set) => ({
  openMenus: [],
  setOpenMenus: (values) => set(() => ({ openMenus: values })),
  addOpenMenu: (values) =>
    set((state) => ({ openMenus: [...state.openMenus, values] })),
  removeOpenMenu: (values) =>
    set((state) => ({
      openMenus: state.openMenus.filter((menu) => menu !== values),
    })),
}));
