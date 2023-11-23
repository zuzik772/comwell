import { create } from "zustand";

type HeaderController = {
  // Decides if the navbar is visible or not (used for scrolling)
  navbarVisible: boolean;
  setNavbarVisible: (state: boolean) => void;

  // Overwrite that forces navbar to be visible (used when opening menus)
  forceNavbarVisible: boolean;
  setForceNavbarVisible: (state: boolean) => void;
};

export const useHeaderControllerStore = create<HeaderController>((set) => ({
  navbarVisible: false,
  setNavbarVisible: (state) => set({ navbarVisible: state }),
  forceNavbarVisible: false,
  setForceNavbarVisible: (state) => set({ forceNavbarVisible: state }),
}));
