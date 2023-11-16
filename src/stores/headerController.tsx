import { create } from "zustand";

type HeaderController = {
  navbarVisible: boolean;
  setNavbarVisible: (state: boolean) => void;
  forceNavbarVisible: boolean;
  setForceNavbarVisible: (state: boolean) => void;
};

export const useHeaderControllerStore = create<HeaderController>((set) => ({
  navbarVisible: false,
  setNavbarVisible: (state) => set({ navbarVisible: state }),
  forceNavbarVisible: false,
  setForceNavbarVisible: (state) => set({ forceNavbarVisible: state }),
}));
