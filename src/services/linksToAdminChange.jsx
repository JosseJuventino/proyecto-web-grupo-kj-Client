import { create } from "zustand";

export const useLinks = create((set) => ({
  link: "Inicio",
  setLink: (link) => set({ link }),
}));
