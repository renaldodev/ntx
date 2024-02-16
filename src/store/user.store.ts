import { create } from "zustand";
type useStore = {
  bears: number;
  add: VoidFunction;
  remove: VoidFunction;
};
const useStore = create<useStore>((set) => ({
  bears: 0,
  add: () => set((state) => ({ bears: state.bears + 1 })),
  remove: () => set({ bears: 0 }),
}));
