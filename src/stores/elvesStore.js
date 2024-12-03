import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const elvesStore = create(devtools((set) => ({
  elves: [],
  setElves: (elves) => set({ elves }),
}),{name: 'ElvesStore'}));

export default elvesStore;