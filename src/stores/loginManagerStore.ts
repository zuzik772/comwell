import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginManagerStore = {
  token: string;
  setToken: (values: string) => void;
  clearToken: () => void;
};

export const useLoginManagerStore = create<LoginManagerStore>()(
  persist(
    (set) => ({
      token: "",
      setToken: (values) => set(() => ({ token: values })),
      clearToken: () => set(() => ({ token: "" })),
    }),
    {
      name: "auth",
    }
  )
);
