import { create } from "zustand";

const useUser = create((set) => ({
  user: {},
  setUser: (projects) => set({ projects }),
}));

export default useUser;
